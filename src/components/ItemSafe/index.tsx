import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container, ItemImage, ItemTitle } from './styles';

interface ItemSafeProps {
  id: number;
  description: string;
  icon: string;
  color: string;
}

interface ItemProps {
  item: ItemSafeProps;
}

const ItemSafe: React.FC<ItemProps> = ({ item }) => {
  return (
    <Container>
      <ItemImage color={item.color}>
        <FontAwesome5 name={item.icon} color="#FFFFFF" size={25} />
      </ItemImage>
      <ItemTitle>{item.description}</ItemTitle>
    </Container>
  );
};

export default ItemSafe;
