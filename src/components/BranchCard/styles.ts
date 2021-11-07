import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Button = {
  type: 'employee' | 'edit' | 'delete' 
};

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary };

  border-radius: 5px;

  flex-direction: row;

  padding-left: 15px;
  margin-bottom: 5px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Id = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Details = styled.View`
  height: 100%;
  margin-left: 15px;
  justify-content: space-evenly;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 17px;
`;

export const EmployeeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EmployeeIcon = styled(MaterialCommunityIcons)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.success};
`;

export const Employees = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;

  margin-left: 5px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape_light};
  width: 40px;
  height: 40px;

  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled(MaterialCommunityIcons)<Button>`
  color: ${({ type, theme }) => 
    type === 'employee' ? theme.colors.success 
    : ( type === 'edit' ? theme.colors.shape: theme.colors.attention )};

  font-size: 28px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;

  margin-bottom: 8px;

  text-align: center;
`;