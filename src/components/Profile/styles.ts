import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.TouchableOpacity`
  background-color: ${Theme.color.secondary};
  width: 60px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  justify-content: center;
  align-items: center;
`;
