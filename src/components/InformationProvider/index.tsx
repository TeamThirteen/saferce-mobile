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
  icon?: string;
  iconWhite?: boolean;
  color?: string;
  size?: number;
}

const InformationProvider: React.FC<InformationProps> = ({
  text,
  value,
  color,
  icon = 'map-marker-alt',
  iconWhite,
  size = 22,
}) => {
  return (
    <Container>
      <Information>
        <InformationIcon color={color}>
          <Icon name={icon} size={size} color={iconWhite ? '#FFF' : '#999'} />
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
