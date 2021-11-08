import React, { ReactNode } from 'react';
import { ModalProps, Keyboard } from 'react-native';

import { CloseIcon, CloseKeyboard, CloseModal, Container, Content, ModalTitle, Overlay } from './styles';

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
        <CloseKeyboard onPress={Keyboard.dismiss}>
          <Content>
            <CloseModal onPress={closeModal}>
              <CloseIcon/>
            </CloseModal>
            <ModalTitle> { title } </ModalTitle>
            { children }
          </Content>
        </CloseKeyboard>
      </Overlay>
    </Container>
  );
};