import React from 'react';

import RatingSafe from '../RatingSafe';

import {
  Container,
  ProviderTitle,
  ProviderCategory,
  ProviderInfo,
  ProviderImage,
} from './styles';

interface CalloutProps {
  id: number;
  title: string;
  description: string;
  category: {
    name: string;
  };
  image: string;
  rating: number;
}

interface ProviderProps {
  provider: CalloutProps;
}

const ProviderCallout: React.FC<ProviderProps> = ({ provider }) => {
  return (
    <Container
      activeOpacity={1}
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 15,
        elevation: 5,
      }}
    >
      <ProviderImage source={{ uri: provider.image }} />
      <ProviderInfo>
        <ProviderTitle>{provider.title}</ProviderTitle>
        <ProviderCategory>{provider.category.name}</ProviderCategory>
        <RatingSafe rating={provider.rating} size={15} preview />
      </ProviderInfo>
    </Container>
  );
};

export default ProviderCallout;
