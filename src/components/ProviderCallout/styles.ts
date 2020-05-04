import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 260px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 15px;
  justify-content: flex-start;
  border-width: 2px;
  border-color: #d7d7d7;
  align-items: center;
  flex-direction: row;
  flex: 1;
  padding: 0px 20px;
`;

export const ProviderImage = styled.ImageBackground`
  width: 55px;
  height: 55px;
  border-radius: 35px;
  background-color: ${Theme.color.secondary};
`;

export const ProviderInfo = styled.View`
  margin-left: 10px;
`;

export const ProviderTitle = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: 15px;
`;

export const ProviderCategory = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 13px;
`;
