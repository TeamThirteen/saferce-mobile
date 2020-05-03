import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.View`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${Theme.color.selected};
  flex: 1;
`;

export const MarkerIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-width: 3px;
  border-color: ${Theme.color.primary};
  background-color: ${Theme.color.secondary};
`;
