import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, MarkerIcon } from './styles';

interface MarkerProps {
  image: string;
}

interface ProviderProps {
  provider: MarkerProps;
}

const ProviderMarker: React.FC<ProviderProps> = () => {
  return (
    <Container>
      <MarkerIcon>
        <Icon name="map-pin" size={16} color="#FFFFFF" />
      </MarkerIcon>
    </Container>
  );
};

export default ProviderMarker;
