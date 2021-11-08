import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.Modal`
  flex: 1;
  position: absolute;
`;

export const Overlay = styled.View`
  background-color: ${({ theme }) => theme.colors.overlay};

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CloseKeyboard = styled.TouchableWithoutFeedback`
  
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  width: 95%;

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

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;

  margin-bottom: 8px;

  text-align: center;
`;