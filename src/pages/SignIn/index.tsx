import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { Button, ButtonTitle, Container, Input, KeyboardDismiss, Label, LoginForm } from './styles';

import LogoSvg from '../../assets/logo.svg'

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <KeyboardDismiss onPress={Keyboard.dismiss}>
      <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <LogoSvg width={200}/>
        <LoginForm>
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
          <Button>
            <ButtonTitle>Entrar</ButtonTitle>
          </Button>
        </LoginForm>
      </Container>
    </KeyboardDismiss>
  );
};