import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.View`
  width: 260px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 15px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex: 1;
  overflow: hidden;
  padding: 0px 20px;
`;

export const ProviderImage = styled.ImageBackground`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  background-color: ${Theme.color.secondary};
`;

export const ProviderInfo = styled.View`
  margin-left: 10px;
`;

export const ProviderTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 15px;
`;

export const ProviderCategory = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 13px;
`;
