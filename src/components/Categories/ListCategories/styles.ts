import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CategoryProps {
  id: number;
  description: string;
  image_url: string;
}

export const Container = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 210px;
  background: transparent;
  bottom: 0px;
  left: 0;
  padding: 0px 10px;
`;

export const FlatListCategories = styled(
  FlatList as new () => FlatList<CategoryProps>,
)`
  padding: 0px 10px;
  margin-top: 15px;
`;

export const FilterTitle = styled.View`
  padding: 0px 10px;
`;

export const FilterTitleText = styled.Text`
  font-size: 25px;
  color: #888888;
  font-family: 'RobotoSlab-Medium';
`;
