import React from 'react';
import { AddIcon, Container } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {

};

export function AddButton({ ...rest }: Props) {
  return(
    <Container { ...rest } >
      <AddIcon/>
    </Container>
  );
};