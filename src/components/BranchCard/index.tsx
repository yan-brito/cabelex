import React, { useState } from 'react';
import { EmployeeList } from '../EmployeeList';
import { ModalView } from '../ModalView';

import { 
  Button, 
  ButtonIcon, 
  ButtonsContainer, 
  Container, 
  Details, 
  DetailsContainer, 
  EmployeeContainer, 
  EmployeeIcon, 
  Employees, 
  Id, 
  Name 
} from './styles';

export type EmployeeProps = {
  id: string;
  name: string;
  branch: string;
  image: string;
};

export type BranchProps = {
  id: string;
  name: string;
  employees: EmployeeProps[] | [];
};

type Props = BranchProps;

export function BranchCard({ name, id, employees }: Props) {
  const [employeesModal, setEmployeesModal] = useState(false);

  function handleOpenEmployeesModal() {
    setEmployeesModal(true);
  }

  function handleCloseEmployeesModal() {
    setEmployeesModal(false);
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
          <Button >
            <ButtonIcon type="edit" name="square-edit-outline" />
          </Button>
          <Button >
            <ButtonIcon type="delete" name="close" />
          </Button>
        </ButtonsContainer>
      </Container>
      <ModalView 
        title="Funcionários" 
        visible={employeesModal} 
        closeModal={handleCloseEmployeesModal} 
      >
        <EmployeeList data={employees} />
      </ModalView>
    </>
  );
};