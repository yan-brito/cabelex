import React from 'react';
import { ModalCentered } from '../ModalCentered';
import { ButtonTitle, Container, DeleteButtonTitle, WarningButton, WarningButtonContainer, WarningText } from './styles';

type Props = {
  visible: boolean;
  name: string;
  closeModal: () => void;
  confirmDelete: () => void;
  type: 'branch' | 'employee';
};

export function ModalDelete({ visible, closeModal, confirmDelete, type, name }: Props) {
  return(
    <ModalCentered
      title={ type === 'branch' ? 'Apagar Filial' : 'Apagar Funcionário'}
      visible={visible}
      closeModal={closeModal}
    >
      <Container>
        <WarningText>Tem certeza que deseja apagar {type === 'branch' ? 'a filial ' : 'o funcionário '} { name }?</WarningText>
          <WarningButtonContainer>
            <WarningButton 
              focused
              onPress={closeModal}
            >
              <ButtonTitle>Cancelar</ButtonTitle>
            </WarningButton>
            <WarningButton onPress={confirmDelete}>
              <DeleteButtonTitle>Apagar</DeleteButtonTitle>
            </WarningButton>
          </WarningButtonContainer>
      </Container>
    </ModalCentered>
  );
};