import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { BranchProps } from '../../components/BranchCard';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BranchList = styled(
  FlatList as new () => FlatList<BranchProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 
    paddingBottom: getBottomSpace(),
    paddingTop: 5,
    paddingHorizontal: 3
  }
})`
  flex: 1;
  width: 100%;
`;

export const CreateBranchContainer = styled.View`
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

export const Button = styled(RectButton)`
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

