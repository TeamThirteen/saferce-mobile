import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('ProfileUser')}>
      <Icon name="user" color="#FFF" size={22} />
    </Container>
  );
};

export default Profile;
