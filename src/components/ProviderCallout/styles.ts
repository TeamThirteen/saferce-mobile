import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 260px;
  height: 80px;
  background-color: #ffffff;
  justify-content: flex-start;
  border-width: 2px;
  border-color: #e7e7e7;
  align-items: center;
  flex-direction: row;
  flex: 1;
  padding: 0px;
  overflow: hidden;
`;

export const ProviderImage = styled.ImageBackground`
  width: 70px;
  height: 80px;
  background-color: ${Theme.color.secondary};
`;

export const ProviderInfo = styled.View`
  margin-left: 10px;
  overflow: hidden;
  flex: 1;
`;

export const ProviderTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 15px;
`;

export const ProviderCategory = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 13px;
  margin-bottom: 5px;
`;
