import React from 'react';
import { Branch, BranchContainer, BranchIcon, Container, Details, Id, Name, ProfileImage } from './styles';

import { EmployeeProps } from '../BranchCard';

type Props = {
  data: EmployeeProps;
};

export function EmployeeCard({ data }: Props) {
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
    </Container>
  );
};