import React, { useState } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';

import { EmployeeList } from '../EmployeeList';
import { ModalCentered } from '../ModalCentered';
import { ModalDelete } from '../ModalDelete';
import { ModalView } from '../ModalView';

import { 
  Button, 
  ButtonIcon, 
  ButtonsContainer, 
  ButtonTitle, 
  Container, 
  Details, 
  DetailsContainer, 
  EditBranchContainer, 
  EditButton, 
  EmployeeContainer, 
  EmployeeIcon, 
  Employees, 
  Form, 
  Id, 
  Label, 
  Name, 
  NameInput
} from './styles';

export type EmployeeProps = {
  id: string;
  name: string;
  branch: string;
};

export type BranchProps = {
  id: string;
  name: string;
  employees: EmployeeProps[] | [];
};

type Props = BranchProps & {
  getBranches: () => void;
};

export function BranchCard({ name, id, employees, getBranches }: Props) {
  const [employeesModalVisible, setEmployeesModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [newBranchName, setNewBranchName] = useState(name);

  function handleOpenEmployeesModal() {
    setEmployeesModalVisible(true);
  }

  function handleCloseEmployeesModal() {
    setEmployeesModalVisible(false);
  }

  function handleOpenEditModal() {
    setEditModalVisible(true);
  }

  function handleCloseEditModal() {
    setEditModalVisible(false);
  }

  function handleOpenDeleteModal() {
    setDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setDeleteModalVisible(false);
  }

  async function handleEditBranch() {
    if(newBranchName.length > 3) {
      try{
        await api.patch(`/branches/${id}`, { name: newBranchName });

        handleCloseEditModal();
        getBranches();
      }catch(error) {
        Alert.alert(error.message);
      }
    }
  }

  async function handleDeleteBranch() {
    if(employees.length === 0) {
      try {
        await api.delete(`/branches/${id}`);
  
        handleCloseDeleteModal();
        getBranches();
      }catch(error){
        Alert.alert(error.message);
      }
    } else {
      Alert.alert('Não é possível apagar uma filial que possui funcionários vinculados.')
    }
    
  }

  return(
    <>
      <Container>
        <DetailsContainer>
          <Id>{ id }</Id>
          <Details>
            <Name> { name } </Name>
            <EmployeeContainer>
              <EmployeeIcon name="account-multiple" />
              <Employees>
                { employees.length }
                { employees.length === 1 ? ' Funcionário' : ' Funcionários' }
              </Employees>
            </EmployeeContainer>
          </Details>
        </DetailsContainer>
        <ButtonsContainer>
          <Button onPress={handleOpenEmployeesModal}>
            <ButtonIcon type="employee" name="account-multiple" />
          </Button>
          <Button onPress={handleOpenEditModal}>
            <ButtonIcon type="edit" name="square-edit-outline" />
          </Button>
          <Button onPress={handleOpenDeleteModal}>
            <ButtonIcon type="delete" name="close" />
          </Button>
        </ButtonsContainer>
      </Container>
      <ModalView 
        title="Funcionários" 
        visible={employeesModalVisible} 
        closeModal={handleCloseEmployeesModal} 
      >
        <EmployeeList data={employees} />
      </ModalView>
      <ModalCentered
        title="Editar filial"
        visible={editModalVisible}
        closeModal={handleCloseEditModal}
      >
        <EditBranchContainer>
          <Form>
            <Label>Nome da filial</Label>
            <NameInput
              value={newBranchName}
              onChangeText={setNewBranchName}
            />
          </Form>
          <EditButton onPress={handleEditBranch}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </EditButton>
        </EditBranchContainer>
      </ModalCentered>
      <ModalDelete
        type="branch"
        closeModal={handleCloseDeleteModal}
        visible={deleteModalVisible}
        name={name}
        confirmDelete={handleDeleteBranch}
      />
    </>
  );
};