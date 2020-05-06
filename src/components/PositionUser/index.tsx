import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Container, ContainerBlueLight, ContainerIcon } from './styles';

const PositionUser: React.FC = () => {
  return (
    <Container
      style={{
        elevation: 5,
      }}
    >
      <ContainerBlueLight>
        <ContainerIcon>
          <FontAwesome5 name="location-arrow" color="#FFFFFF" size={10} />
        </ContainerIcon>
      </ContainerBlueLight>
    </Container>
  );
};

export default PositionUser;
