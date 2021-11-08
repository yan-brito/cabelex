import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  position: absolute;
  right: 15px;
  bottom: 15px;

  border-radius: 30px;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const AddIcon = styled(MaterialCommunityIcons).attrs({
  name: "plus"
})`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 30px;
`;