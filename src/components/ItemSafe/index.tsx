import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, ItemImage, ItemTitle } from './styles';

interface ItemSafeProps {
  id: number;
  title: string;
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
        <Icon name={item.icon} color="#FFFFFF" size={25} />
      </ItemImage>
      <ItemTitle>{item.title}</ItemTitle>
    </Container>
  );
};

export default ItemSafe;
