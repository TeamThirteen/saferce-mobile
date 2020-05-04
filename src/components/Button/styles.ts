import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Theme from '../../theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${Theme.color.pink};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #ffffff;
  font-size: 18px;
`;
