import React from 'react';

import {
  Container,
  FlatListCategories,
  FilterTitle,
  FilterTitleText,
  LineTop,
} from './styles';

import ItemCategory from './ItemCategory';

interface CategoriesProps {
  id: number;
  description: string;
  image_url: string;
}

interface ListCategoriesProps {
  categories: CategoriesProps[];
  handleProviderByCategory(categoryId: number): void;
  onShowCategoriesFilter(): void;
}

const ListCategories: React.FC<ListCategoriesProps> = ({
  categories,
  handleProviderByCategory,
  onShowCategoriesFilter,
}) => {
  return (
    <Container
      colors={['#FFFFFF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        elevation: 5,
      }}
    >
      <LineTop onPress={onShowCategoriesFilter} />

      <FilterTitle>
        <FilterTitleText>Categorias</FilterTitleText>
      </FilterTitle>

      {categories && (
        <FlatListCategories
          data={categories}
          horizontal
          renderItem={({ item }) => (
            <ItemCategory
              handleProviderByCategory={handleProviderByCategory}
              category={item}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </Container>
  );
};

export default ListCategories;
