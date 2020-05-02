import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.View`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  border-width: 5px;
  border-color: ${Theme.color.primary};
`;

export const ProviderImage = styled.ImageBackground`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
`;
