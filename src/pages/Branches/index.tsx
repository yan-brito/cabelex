import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Container } from './styles';
import api from '../../services/api';

import { BranchCard, BranchProps, EmployeeProps } from '../../components/BranchCard';

export function Branches() {

  const [data, setData] = useState<BranchProps[]>();

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

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = 'teste';
    getBranches();
  }, []);


  return(
    <>
      <Container 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <BranchCard name={item.name} id={item.id} employees={item.employees} />
        }
      />
    </>
  );
};