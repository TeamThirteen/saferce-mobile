import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${Theme.color.danger};
  width: 60px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  justify-content: center;
  align-items: center;
`;
