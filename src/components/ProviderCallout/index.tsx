import React from 'react';
import { Container, ProviderTitle, ProviderCategory } from './styles';

interface CalloutProps {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface ProviderProps {
  provider: CalloutProps;
}

const ProviderCallout: React.FC<ProviderProps> = ({ provider }) => {
  return (
    <Container
      style={{
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
          height: 2,
          width: 0,
        },
      }}
    >
      <ProviderTitle>{provider.title}</ProviderTitle>
      <ProviderCategory>{provider.category}</ProviderCategory>
    </Container>
  );
};

export default ProviderCallout;
