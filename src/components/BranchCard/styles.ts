import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Button = {
  type: 'employee' | 'edit' | 'delete' 
};

type WarningButton = {
  focused?: boolean;
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

export const EditBranchContainer = styled.View`
  align-items: center;
`;

export const Form = styled.View`
  width: 90%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 5px;
`;

export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(111, 75, 194, 0.5)',
  autoCorrect: false
})`
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.title};

  width: 100%;
  height: 40px;

  padding-left: 5px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

export const EditButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 50%;
  height: 50px;

  margin: 15px 0;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.shape};
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