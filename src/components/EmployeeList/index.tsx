import React from 'react';
import { EmployeeProps } from '../BranchCard';
import { EmployeeCard } from '../EmployeeCard';
import { Container, Loading, LoadingContainer, Warning, WarningContainer } from './styles';

type Props = {
  withOptions?: boolean;
  data: EmployeeProps[];
  getEmployees: () => void;
};

export function EmployeeList({ data, withOptions, getEmployees }: Props) {
    if(!data) {
      return (
        <LoadingContainer>
          <Loading/>
        </LoadingContainer>
      )
    } else if(data.length > 0) {
      return (
        <Container
          data={data}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => <EmployeeCard data={item} withOptions={withOptions} getEmployees={getEmployees} />}
        />
      );
    } else {
      return (
        <WarningContainer>
          <Warning>Ainda não há funcionários cadastrados.</Warning>
        </WarningContainer>
      );
    };
};