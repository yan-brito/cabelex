import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { EmployeeProps } from '../../components/BranchCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled(
  FlatList as new () => FlatList<EmployeeProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 
    paddingBottom: getBottomSpace(),
    paddingTop: 5,
    paddingHorizontal: 3
  }
})``;

export const WarningContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;

  margin-top: -150px;
`;