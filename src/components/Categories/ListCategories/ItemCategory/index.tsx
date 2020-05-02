import React from 'react';

import { Container, CategoryImage, CategoryTitle } from './styles';

interface CategoryProps {
  id: number;
  title: string;
  image: string;
}

interface ItemCategoryProps {
  category: CategoryProps;
}

const ItemCategory: React.FC<ItemCategoryProps> = ({ category }) => {
  return (
    <Container>
      <CategoryImage
        source={{ uri: category.image }}
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 15,
          elevation: 5,
        }}
      />
      <CategoryTitle>{category.title}</CategoryTitle>
    </Container>
  );
};

export default ItemCategory;
