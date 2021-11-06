import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { makeServer } from './src/services/mirage';

if((window as any).server) {
  (window as any).server.shutdown();
  (window as any).server = undefined;
}
(window as any).server = makeServer();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cabelex!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
