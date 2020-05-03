import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Information,
  InformationIcon,
  InformationText,
  InformationValue,
  InformationDescription,
} from './styles';

interface InformationProps {
  text: string;
  value: string;
}

const InformationProvider: React.FC<InformationProps> = ({ text, value }) => {
  return (
    <Container>
      <Information>
        <InformationIcon>
          <Icon name="map-marker-alt" size={22} color="#FFF" />
        </InformationIcon>
        <InformationDescription>
          <InformationText>{text}</InformationText>
          <InformationValue>{value}</InformationValue>
        </InformationDescription>
      </Information>
    </Container>
  );
};

export default InformationProvider;
