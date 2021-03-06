import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';
import { CloseIcon, CloseModal, Content, Modal, ModalTitle, Overlay } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  title: string;
};

export function ModalView({ children, closeModal, title, ...rest }: Props) {
  return(
    <Modal 
      transparent {...rest}
      animationType="slide"
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
    </Modal>
  );
};