import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ImageLogo = styled.Image`
  height: 170px;
  width: 170px;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Poppins-Medium';
  margin: 44px 0px 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Theme.color.pink};
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0px;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Poppins-Regular';
  margin-left: 16px;
`;
