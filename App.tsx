import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components/native';

import { makeServer } from './src/services/mirage';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';


import { AppRoutes } from './src/routes/app.routes';
import theme from './src/global/styles/theme';
import { SignIn } from './src/pages/SignIn';

if((window as any).server) {
  (window as any).server.shutdown();
  (window as any).server = undefined;
}
(window as any).server = makeServer();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <ThemeProvider theme={theme}>
      <SignIn/>
      {/* <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer> */}
    </ThemeProvider>
  );
}