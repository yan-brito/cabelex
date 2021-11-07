import React from 'react';
import { Button, ButtonIcon, ButtonsContainer, Container, Details, DetailsContainer, EmployeeContainer, EmployeeIcon, Employees, Id, Name } from './styles';

export type EmployeeProps = {
  id: string;
  name: string;
  branch: string;
};

export type BranchProps = {
  id: string;
  name: string;
  employees: EmployeeProps[];
};

type Props = BranchProps;

export function ItemCard({ name, id, employees }: Props) {
  return(
    <Container>
      <DetailsContainer>
        <Id>{ id }</Id>
        <Details>
          <Name> { name } </Name>
          <EmployeeContainer>
            <EmployeeIcon name="account-multiple" />
            <Employees>
              { employees.length }
              { employees.length > 1 ? ' Funcionários' : ' Funcionário' }
            </Employees>
          </EmployeeContainer>
        </Details>
      </DetailsContainer>
      <ButtonsContainer>
        <Button >
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
  );
};