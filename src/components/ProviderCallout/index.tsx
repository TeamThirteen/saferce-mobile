import React from 'react';
import { Text } from 'react-native';

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
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 0 },
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
