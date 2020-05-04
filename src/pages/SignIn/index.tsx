import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logImg from '../../assets/images/logo_saferce.png';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  CreateAccountText,
  ImageLogo,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na Autenticação',
          'Ocorreu um erro ao fazer login. Verifique as credenciais.',
        );
      } finally {
        setLoading(false);
      }
    },
    [signIn],
  );

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
            <ImageLogo source={logImg} />

            <View>
              <Title>Acesse sua conta</Title>
            </View>

            <Form onSubmit={handleSignIn} ref={formRef}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <ForgotPassword
                onPress={() => {
                  console.log('Forgot Password');
                }}
              >
                <ForgotPasswordText>ESQUECI A SENHA</ForgotPasswordText>
              </ForgotPassword>

              <Button
                onPress={() => formRef.current?.submitForm()}
                loading={loading}
              >
                ACESSAR
              </Button>
            </Form>

            <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
              <CreateAccountText>Você não tem uma conta?</CreateAccountText>
              <Icon name="log-in" color="#ff225c" size={24} />
              <CreateAccountButtonText>CRIAR CONTA</CreateAccountButtonText>
            </CreateAccountButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
