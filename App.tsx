import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { makeServer } from './src/services/mirage';

import { AppRoutes } from './src/routes/app.routes';

if((window as any).server) {
  (window as any).server.shutdown();
  (window as any).server = undefined;
}
(window as any).server = makeServer();

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  );
}