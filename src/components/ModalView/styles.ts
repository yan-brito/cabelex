import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Modal = styled.Modal`
`;

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.3);

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  width: 95%;
  height: 88%;

  padding: 35px 5px 0;

  border-radius: 5px;

  position: relative;
`;

export const CloseModal = styled(BorderlessButton)`
  position: absolute;
  top: 2px;
  right: 2px;
`;

export const CloseIcon = styled(MaterialCommunityIcons).attrs({
  name: 'close-box'
})`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: 30px;
`;
