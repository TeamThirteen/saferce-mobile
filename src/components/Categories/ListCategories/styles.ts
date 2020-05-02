import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 240px;
  background: transparent;
  bottom: 0px;
  left: 0;
  padding: 0px 10px;
`;

export const FlatListCategories = styled(FlatList)`
  padding: 0px 10px;
`;

export const FilterTitle = styled.View`
  padding: 0px 10px;
  margin-bottom: 5px;
`;

export const FilterTitleText = styled.Text`
  font-size: 25px;
  color: #888888;
  font-family: 'Poppins-Medium';
`;
