import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 15px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const KeyboardDismiss = styled.TouchableWithoutFeedback`
`;

export const LoginForm = styled.View`
  width: 100%;

  padding: 10px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;

  width: 100%;
  height: 50px;

  margin: 5px 0;
  padding-left: 5px;

  border-bottom-width: 4px;
  border-color: ${({ theme }) => theme.colors.primary};

  background-color: ${({ theme }) => theme.colors.primary_light};

  color: ${({ theme }) => theme.colors.shape};
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;

  border-radius: 7px;

  margin: 20px 0;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.shape};
`;