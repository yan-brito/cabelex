import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

import { Container } from './styles';

import { EmployeeProps, BranchProps } from '../../components/BranchCard';
import { EmployeeList } from '../../components/EmployeeList';

export function Employees() {
  const [employees, setEmployees] = useState<EmployeeProps[]>();

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
          image: employee.image,
          branch: employeeBranch.name
        }
      });

      setEmployees(formattedEmployees);

    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useFocusEffect(useCallback(() => {
    api.defaults.headers.common['Authorization'] = 'teste';
    getEmployees();
  }, []));

  return(
    <Container>
      <EmployeeList data={employees} withOptions getEmployees={getEmployees} />
    </Container>
  );
};