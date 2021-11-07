import React from 'react';
import { EmployeeProps } from '../BranchCard';
import { EmployeeCard } from '../EmployeeCard';
import { Container, Warning, WarningContainer } from './styles';

type Props = {
  withOptions?: false;
  data: EmployeeProps[];
};

export function EmployeeList({ data }: Props) {
  return(
    <>
    { data.length > 0 ?
      <Container
        data={data}
        keyExtractor={item => item.id}
        renderItem={ ({ item }) => <EmployeeCard data={item} />}
      />
      :
      <WarningContainer>
        <Warning>Ainda não há funcionários cadastrados nessa filial.</Warning>
      </WarningContainer>
    }
    </>
  );
};