import styled from 'styled-components/native';

interface ItemImageProps {
  color: string;
}

export const Container = styled.View`
  margin-top: 40px;
  padding: 0px 0px 20px;
`;

export const ItemImage = styled.View<ItemImageProps>`
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.color || '#C7C7C7'};
  border-radius: 15px;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
`;

export const ItemTitle = styled.Text`
  width: 70px;
  font-family: 'Poppins-Medium';
  font-size: 13px;
  margin-top: 5px;
`;
