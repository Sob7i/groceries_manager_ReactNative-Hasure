import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import Createlist from './src/components/create-list';

export default function App() {
  return (
    <View style={styles.container}>
      <Createlist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
