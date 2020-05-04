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
  height: 120px;
  width: 120px;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #666666;
  font-family: 'RobotoSlab-Regular';
  margin: 44px 0px 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 15px;
  flex: 1;
  align-items: flex-end;
  width: 100%;
`;

export const ForgotPasswordText = styled.Text`
  color: ${Theme.color.pink};
  font-size: 16px;
  font-family: 'RobotoSlab-Bold';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 16px 0px;
  margin-top: 20px;
`;

export const CreateAccountText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  margin-right: 10px;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${Theme.color.pink};
  font-size: 14px;
  font-family: 'RobotoSlab-Bold';
  margin-left: 10px;
`;
