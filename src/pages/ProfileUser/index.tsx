import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText,
  BackToGoBack,
  BackToGoBackText,
  ImageLogo,
  BoxProfile,
  BoxProfileText,
  IconInput,
} from './styles';

const ProfileUser: React.FC = () => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <ImageLogo
              source={{
                uri: `https://api.adorable.io/avatars/285/${user.userData.name}`,
              }}
            />

            <View>
              <Title>Informações da Conta</Title>
            </View>

            <BoxProfile>
              <IconInput name="user" size={20} color="#aaaaaa" />
              <BoxProfileText>{user.userData.name}</BoxProfileText>
            </BoxProfile>

            <BoxProfile>
              <IconInput name="mail" size={20} color="#aaaaaa" />
              <BoxProfileText>{user.userData.email}</BoxProfileText>
            </BoxProfile>

            <BackToGoBack onPress={() => navigation.goBack()}>
              <IconInput name="arrow-left" size={20} color="#33495d" />
              <BackToGoBackText>VOLTAR</BackToGoBackText>
            </BackToGoBack>

            <BackToSignIn onPress={signOut}>
              <BackToSignInText>SAIR DO SAFERCE</BackToSignInText>
            </BackToSignIn>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfileUser;
