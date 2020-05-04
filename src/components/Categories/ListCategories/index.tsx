import React from 'react';

import {
  Container,
  FlatListCategories,
  FilterTitle,
  FilterTitleText,
} from './styles';

import ItemCategory from './ItemCategory';

interface CategoriesProps {
  id: number;
  title: string;
  image: string;
}

interface ListCategoriesProps {
  categories: CategoriesProps[];
}

const ListCategories: React.FC<ListCategoriesProps> = ({ categories }) => {
  return (
    <Container
      colors={['transparent', '#FFFFFF', '#FFFFFF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <FilterTitle>
        <FilterTitleText>Categorias</FilterTitleText>
      </FilterTitle>

      {categories && (
        <FlatListCategories
          data={categories}
          horizontal
          renderItem={({ item }) => <ItemCategory category={item} />}
          keyExtractor={(item) => item.title}
        />
      )}
    </Container>
  );
};

export default ListCategories;
