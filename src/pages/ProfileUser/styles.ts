import styled from 'styled-components/native';
import { Platform } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

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
  border-radius: 60px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #666666;
  font-family: 'RobotoSlab-Regular';
  margin: 44px 0px 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  align-items: center;
  color: #ff9000;
  flex-direction: row;
  justify-content: center;
  padding: 16px 0px;
  margin-top: 20px;
`;

export const BackToSignInText = styled.Text`
  color: ${Theme.color.pink};
  font-size: 14px;
  font-family: 'RobotoSlab-Bold';
  margin-left: 16px;
`;

export const BackToGoBack = styled.TouchableOpacity`
  align-items: center;
  color: #ff9000;
  flex-direction: row;
  justify-content: center;
  padding: 16px 0px;
  margin-top: 20px;
`;

export const BackToGoBackText = styled.Text`
  color: ${Theme.color.secondary};
  font-size: 14px;
  font-family: 'RobotoSlab-Bold';
  margin-left: 0px;
`;

export const BoxProfile = styled.View`
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: #cccccc;
  flex-direction: row;
  align-items: center;
`;

export const BoxProfileText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
`;

export const IconInput = styled(FeatherIcon)`
  margin-right: 16px;
`;
