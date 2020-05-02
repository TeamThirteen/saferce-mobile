import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

interface CategoriesProps {
  onShowCategoriesFilter(): void;
}

const Categories: React.FC<CategoriesProps> = ({ onShowCategoriesFilter }) => {
  return (
    <Container onPress={onShowCategoriesFilter}>
      <Icon name="feather" color="#FFF" size={22} />
    </Container>
  );
};

export default Categories;
