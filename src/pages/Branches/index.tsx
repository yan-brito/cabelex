import React from 'react';
import { Container } from './styles';

import { ItemCard, BranchProps } from '../../components/ItemCard';

export function Branches() {

  const data: BranchProps[] = [{
    name: 'Cabelex - Matriz',
    id: '1',
    employees: [
      {
        name: 'Luciano',
        id: '2',
        branch: '1'
      }
    ]
  }]

  return(
    <Container 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => 
        <ItemCard name={item.name} id={item.id} employees={item.employees} />
      }
    />
  );
};