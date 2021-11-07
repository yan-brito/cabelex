import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';
import { CloseIcon, CloseModal, Container, Content, ModalTitle, Overlay } from './styles';

type Props = ModalProps & {
  children:  ReactNode;
  closeModal: () => void;
  title?: string;
};

export function ModalCentered({children, closeModal, title, ...rest }: Props) {
  return(
    <Container 
      transparent
      animationType="fade"
      {...rest}
    >
      <Overlay>
        <Content>
          <CloseModal onPress={closeModal}>
            <CloseIcon/>
          </CloseModal>
          <ModalTitle> { title } </ModalTitle>
          { children }
        </Content>
      </Overlay>
    </Container>
  );
};