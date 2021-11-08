import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type WarningButton = {
  focused?: boolean;
};

export const Container = styled.View`

`;

export const WarningText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.attention};

  text-align: center;

  margin-bottom: 5px;
`;

export const WarningButtonContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-evenly;

  margin: 15px 0;
`;

export const WarningButton = styled(RectButton)<WarningButton>`
  width: 40%;
  height: 50px;

  background-color: ${({ theme, focused }) => focused ? theme.colors.attention : theme.colors.shape };

  border: 1px solid ${({ theme }) => theme.colors.attention};
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const DeleteButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.attention};
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.shape};
`;