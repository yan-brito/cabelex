import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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