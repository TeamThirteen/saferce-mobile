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
  font-size: 24px;
  color: #666666;
  font-family: 'RobotoSlab-Regular';
  margin: 44px 0px 24px;
`;

export const BackToSigIn = styled.TouchableOpacity`
  align-items: center;
  color: #ff9000;
  flex-direction: row;
  justify-content: center;
  padding: 16px 0px;
  margin-top: 20px;
`;

export const BackToSigInText = styled.Text`
  color: ${Theme.color.pink};
  font-size: 14px;
  font-family: 'RobotoSlab-Bold';
  margin-left: 16px;
`;
