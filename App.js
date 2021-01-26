import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import File from './components/file.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is where our App info will go.</Text>
      <h2>We can use html tags here,</h2>
      <p>This is in a paragraph tag</p>
      <File />
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
