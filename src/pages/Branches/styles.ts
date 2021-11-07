import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { BranchProps } from '../../components/ItemCard';

export const Container = styled(
  FlatList as new () => FlatList<BranchProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 
    paddingBottom: getBottomSpace(),
    paddingTop: 5,
    paddingHorizontal: 3
  }
})``;
