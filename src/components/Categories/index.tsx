import React from 'react';

import { Container } from './styles';

const Categories: React.FC = () => {
  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 15,
        elevation: 5,
      }}
    />
  );
};

export default Categories;
