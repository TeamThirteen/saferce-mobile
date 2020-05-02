import React from 'react';
import { Container, ProviderImage } from './styles';

interface MarkerProps {
  image: string;
}

interface ProviderProps {
  provider: MarkerProps;
}

const ProviderMarker: React.FC<ProviderProps> = ({ provider }) => {
  return (
    <Container>
      <ProviderImage
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,

          elevation: 5,
          position: 'relative',
        }}
        source={{ uri: provider.image }}
      />
    </Container>
  );
};

export default ProviderMarker;
