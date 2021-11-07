import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

import { 
  AddIcon, 
  BranchList, 
  Button, 
  ButtonTitle, 
  Container, 
  CreateBranch, 
  CreateBranchContainer, 
  Form, 
  Label, 
  NameInput 
} from './styles';

import { BranchCard, BranchProps, EmployeeProps } from '../../components/BranchCard';
import { ModalCentered } from '../../components/ModalCentered';

export function Branches() {

  const [data, setData] = useState<BranchProps[]>();
  const [createBranchModalVisible, setCreateBranchModalVisible] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');

  async function getBranches() {
    try {
      const responseBranches = await api.get('/branches');
      const responseEmployees = await api.get('/employees');
      const branches: BranchProps[] = responseBranches ? responseBranches.data.branches : [];
      const employees: EmployeeProps[] = responseEmployees ? responseEmployees.data.employees : [];

      const formattedData: BranchProps[] = branches.map((item: BranchProps) => {
        const branchEmployees =  employees.filter(employee => employee.branch === item.id);
        const formattedEmployees = branchEmployees.map((employee: EmployeeProps) => {
          return {
            id: employee.id,
            name: employee.name,
            image: employee.image,
            branch: item.name
          }
        })

        return {
          id: item.id,
          name: item.name,
          employees: formattedEmployees
        }
      })
      
      setData(formattedData);

    } catch(error) {
      Alert.alert(String(error));
    }
  };

  async function handleCreateBranch() {
    if(newBranchName.length > 3){
      try {
        api.post('/branches', { name: newBranchName })
      } catch(error) {
        Alert.alert(error.message);
      }

      setCreateBranchModalVisible(false);
      setNewBranchName('');
      getBranches();
    } else {
      Alert.alert('O nome da filial deve ter no mínimo 3 caracteres!')
    }
  }

  function handleOpenCreateBranchModal() {
    setCreateBranchModalVisible(true);
  };

  function handleCloseCreateBranchModal() {
    setCreateBranchModalVisible(false);
  };

  useFocusEffect(useCallback(() => {
    api.defaults.headers.common['Authorization'] = 'teste';
    getBranches();
  }, []));


  return(
    <Container>
      <BranchList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <BranchCard name={item.name} id={item.id} employees={item.employees} />
        }
      />
      <CreateBranch onPress={handleOpenCreateBranchModal}>
        <AddIcon/>
      </CreateBranch>
      <ModalCentered 
        title="Adicionar Filial" 
        visible={createBranchModalVisible} 
        closeModal={handleCloseCreateBranchModal}
      >
        <CreateBranchContainer>
          <Form>
            <Label>Nome da filial: </Label>
            <NameInput 
              placeholder="Ex: Cabelex - SP"
              value={newBranchName}
              onChangeText={setNewBranchName}
            />
          </Form>
          <Button onPress={handleCreateBranch} >
            <ButtonTitle>Adicionar</ButtonTitle>
          </Button>
        </CreateBranchContainer>
      </ModalCentered>
    </Container>
  );
};