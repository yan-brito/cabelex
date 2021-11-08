import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

type ButtonProps = {
  type: 'edit' | 'delete' 
};


export const Container = styled.View`
  width: 100%;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.primary_light};

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  padding: 5px;
  margin-bottom: 5px;

  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
`;

export const Details = styled.View`
  margin-left: 8px;
  flex: 1;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
`;

export const Id = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 12px;
`;

export const BranchContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BranchIcon = styled(MaterialCommunityIcons).attrs({
  name: 'hair-dryer-outline'
})`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  margin-right: 3px;
`;

export const Branch = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const OptionsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape_light};

  width: 40px;
  height: 40px;

  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled(MaterialCommunityIcons)<ButtonProps>`
    color: ${({ type, theme }) => type === 'edit' ? theme.colors.title: theme.colors.attention};

  font-size: 28px;
`;

export const EditEmployeeContainer = styled.View`
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

export const EditButton = styled(RectButton)`
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