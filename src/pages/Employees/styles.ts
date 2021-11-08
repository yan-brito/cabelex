import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CreateEmployeeContainer = styled.View`
  align-items: center;
`;

export const Form = styled.View`
  width: 90%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(111, 75, 194, 0.5)',
  autoCorrect: false
})`
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.shape};

  width: 100%;
  height: 50px;

  padding-left: 10px;
  margin: 10px 0;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 50%;
  height: 50px;

  margin: 15px 0;

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  z-index: -1;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.shape};
`;