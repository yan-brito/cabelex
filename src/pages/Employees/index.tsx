import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import api from '../../services/api';

import { Button, ButtonTitle, Container, CreateEmployeeContainer, Form, Label, NameInput } from './styles';

import { EmployeeProps, BranchProps } from '../../components/BranchCard';
import { EmployeeList } from '../../components/EmployeeList';
import { AddButton } from '../../components/AddButton';
import { ModalCentered } from '../../components/ModalCentered';

export function Employees() {
  const [employees, setEmployees] = useState<EmployeeProps[]>();

  const [createEmployeeModalVisible, setCreateEmployModalVisible] = useState(false);

  const [openPicker, setOpenPicker] = useState(false);
  const [pickerValue, setPickerValue] = useState('');
  const [pickerItems, setPickerItems] = useState([]);

  const [newEmployeeName, setNewEmployeeName] = useState('');

  async function getEmployees() {
    try {
      const responseBranches = await api.get('/branches');
      const responseEmployees = await api.get('/employees');
      const branches: BranchProps[] = responseBranches ? responseBranches.data.branches : [];
      const employees: EmployeeProps[] = responseEmployees ? responseEmployees.data.employees : [];

      const formattedEmployees = employees.map(employee => {
        const employeeBranch = branches.filter(branch => branch.id === employee.branch)[0];

        return {
          id: employee.id,
          name: employee.name,
          branch: employeeBranch.name
        }
      });

      const branchesItems = branches.map(branch => {
        return {
          label: branch.name,
          value: branch.id
        }
      });

      setPickerItems(branchesItems);

      setEmployees(formattedEmployees);

    } catch (error) {
      Alert.alert(error.message);
    }
  };

  async function handleCreateEmployee() {
    try {
      await api.post('/employees', { name: newEmployeeName, branch: pickerValue });

      getEmployees();
      handleCloseCreateEmployeeModal();
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  function handleOpenCreateEmployeeModal() {
    setCreateEmployModalVisible(true);
  }

  function handleCloseCreateEmployeeModal() {
    setCreateEmployModalVisible(false);
  }

  useFocusEffect(useCallback(() => {
    api.defaults.headers.common['Authorization'] = 'teste';
    getEmployees();
  }, []));

  return(
    <Container>
      <EmployeeList data={employees} withOptions getEmployees={getEmployees} />
      <AddButton onPress={handleOpenCreateEmployeeModal} />
      <ModalCentered
        title="Adicionar Funcionário"
        visible={createEmployeeModalVisible}
        closeModal={handleCloseCreateEmployeeModal}
      >
      <CreateEmployeeContainer>
          <Form>
            <Label>Nome</Label>
            <NameInput 
              value={newEmployeeName}
              onChangeText={setNewEmployeeName}
            />
            <Label>Filial</Label>
            <DropDownPicker 
                    open={openPicker}
                    setOpen={setOpenPicker}
                    items={pickerItems}
                    setItems={setPickerItems}
                    value={pickerValue}
                    setValue={setPickerValue}
                    placeholder="Selecione uma filial"
                    style={{
                      borderColor: '#6f4bc2',
                      marginVertical: 10
                    }}
            />
            </Form>
            <Button onPress={handleCreateEmployee}>
              <ButtonTitle>Confirmar</ButtonTitle>
            </Button>
        </CreateEmployeeContainer>
      </ModalCentered>
    </Container>
  );
};