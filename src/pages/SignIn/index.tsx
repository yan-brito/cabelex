import React, { useState } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Button, ButtonTitle, Container, Input, KeyboardDismiss, Label, LoginForm } from './styles';

import LogoSvg from '../../assets/logo.svg'
import { Loading } from '../../components/Loading';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    try{
      await signIn(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return(
    <KeyboardDismiss onPress={Keyboard.dismiss}>
      <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <LogoSvg width={200}/>
        <LoginForm>
          { loading ?
            <Loading/>
            :
            <>
              <Label>Email</Label>
              <Input 
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCorrect={false}
              />
              <Label>Senha</Label>
              <Input 
                value={password}
                onChangeText={setPassword}
                textContentType="password"
                autoCorrect={false}
                secureTextEntry
              />
              <Button onPress={handleSignIn}>
                <ButtonTitle>Entrar</ButtonTitle>
              </Button>
            </>
          }
        </LoginForm>
      </Container>
    </KeyboardDismiss>
  );
};