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
  background: transparent;
  bottom: 0px;
  left: 0;
  padding: 30px 10px 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const LineTop = styled.TouchableOpacity`
  height: 4px;
  background-color: #c7c7c7;
  width: 50px;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  margin: auto;
  align-self: center;
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
  font-size: 20px;
  color: #888888;
  font-family: 'RobotoSlab-Medium';
`;
