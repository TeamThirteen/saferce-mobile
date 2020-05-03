import React from 'react';

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
  category: string;
  image: string;
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
        <ProviderCategory>{provider.category}</ProviderCategory>
      </ProviderInfo>
    </Container>
  );
};

export default ProviderCallout;
