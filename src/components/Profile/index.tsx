import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Icon name="user" color="#FFF" size={22} />
    </Container>
  );
};

export default Profile;
