import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import api from '../../services/api';

import { Branch, BranchContainer, BranchIcon, Button, ButtonIcon, ButtonTitle, Container, Details, EditButton, EditEmployeeContainer, Form, Id, Label, Name, NameInput, OptionsContainer, ProfileImage } from './styles';

import { EmployeeProps, BranchProps } from '../BranchCard';
import { ModalCentered } from '../ModalCentered';
import { Alert } from 'react-native';
import { ModalDelete } from '../ModalDelete';

type Props = {
  data: EmployeeProps;
  withOptions: boolean;
  getEmployees: () => void;
};

export function EmployeeCard({ data, withOptions, getEmployees }: Props) {
  const[editModalVisible, setEditModalVisible] = useState(false);
  const[deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [openPicker, setOpenPicker] = useState(false);
  const [pickerValue, setPickerValue] = useState('');
  const [pickerItems, setPickerItems] = useState([]);

  const [newEmployeeName, setNewEmployeeName] = useState(data.name);

  async function getBranches() {
    try {
      const response = await api.get('/branches');
      const branches: BranchProps[] = response ? response.data.branches : [];

      const branchesPickerItems = branches.map(branch => {
        return {
          label: branch.name,
          value: branch.id
        }
      });

      const employeeBranchValue = branches.filter(branch => branch.name === data.branch)[0].id;

      setPickerValue(employeeBranchValue);
      setPickerItems(branchesPickerItems);

    } catch (error) {
      Alert.alert(error.message);
    }
  }

  async function handleEditEmployee() {
    try { 
      await api.patch(`/employees/${data.id}`, { name: newEmployeeName, branch: pickerValue });

      getEmployees();
      handleCloseEditModal();
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  async function handleDeleteEmployee() {
    try {
      await api.delete(`/employees/${data.id}`);

      getEmployees();
      handleCloseDeleteModal();
    } catch (error) {
      Alert.alert(error.message);
    }
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

  useEffect(() => {
    getBranches();
  }, []);

  return(
    <Container>
      <ProfileImage source={{ uri: data.image }} resizeMode="cover" />
      <Details>
        <Name>{ data.name }</Name>
        <Id>ID: { data.id }</Id>
        <BranchContainer>
          <BranchIcon />
          <Branch> { data.branch } </Branch>
        </BranchContainer>
      </Details>
      { withOptions &&
        <OptionsContainer>
          <Button onPress={handleOpenEditModal}>
            <ButtonIcon 
              type="edit" 
              name="square-edit-outline"
            />
          </Button>
          <Button onPress={handleOpenDeleteModal}>
            <ButtonIcon 
              type="delete"
              name="close"
            />
          </Button>
        </OptionsContainer>
      }
      <ModalCentered 
        title="Editar Funcionário"
        visible={editModalVisible}
        closeModal={handleCloseEditModal}
      >
        <EditEmployeeContainer>
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
              style={{
                borderColor: '#6f4bc2',
                marginVertical: 10
              }}
            />
          </Form>
          <EditButton onPress={handleEditEmployee}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </EditButton>
        </EditEmployeeContainer>
      </ModalCentered>
      <ModalDelete 
        type="employee"
        visible={deleteModalVisible}
        closeModal={handleCloseDeleteModal}
        confirmDelete={handleDeleteEmployee}
        name={data.name}
      />
    </Container>
  );
};