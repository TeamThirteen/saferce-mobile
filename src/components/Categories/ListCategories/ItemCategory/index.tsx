import React from 'react';

import { Container, CategoryImage, CategoryTitle } from './styles';

interface CategoryProps {
  id: number;
  description: string;
  image_url: string;
}

interface ItemCategoryProps {
  category: CategoryProps;
  handleProviderByCategory(categoryId: number): void;
}

const ItemCategory: React.FC<ItemCategoryProps> = ({
  category,
  handleProviderByCategory,
}) => {
  return (
    <Container onPress={() => handleProviderByCategory(category.id)}>
      <CategoryImage
        source={{ uri: category.image_url }}
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 15,
          elevation: 5,
        }}
      />
      <CategoryTitle>{category.description}</CategoryTitle>
    </Container>
  );
};

export default ItemCategory;
