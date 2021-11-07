import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';
import { CloseIcon, CloseModal, Content, Modal, Overlay } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: Props) {
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
            { children }
        </Content>
      </Overlay>
    </Modal>
  );
};