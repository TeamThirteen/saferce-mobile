import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native';

import Theme from '../../theme';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const ProviderWrapper = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: #f0f0f0;
`;

export const ProviderImageGradient = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ProviderWrapperImage = styled.View`
  flex: 1;
  overflow: hidden;
`;

export const ProviderImage = styled.ImageBackground`
  height: 200px;
  width: 100%;
  flex: 1;
  margin-top: 20px;
`;

export const ProviderInfo = styled.View`
  padding: 30px 20px 30px;
`;

export const ProviderName = styled.Text`
  font-size: 21px;
  font-family: 'Poppins-Medium';
`;

export const ProviderCategory = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: ${Theme.color.selected};
  margin-top: -4px;
`;

export const ProviderItemsSafe = styled(FlatList)``;

export const InformationTitle = styled.Text`
  font-size: 21px;
  font-family: 'Poppins-Medium';
  margin-bottom: 20px;
`;

export const Separator = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #ccc;
  margin: 20px 0 20px 0;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  background-color: transparent;
  left: 20px;
  top: 20px;
`;
