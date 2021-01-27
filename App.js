import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './app/components/IntroScreen.js'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.texttag}>This is where our App info will go.</Text>
      <File /> */}
      <IntroScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  texttag: {
    color: 'blue',
    fontSize: 16,
    padding: 35,
    backgroundColor: 'black',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 75,
    height: 150,
    width: 150,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  component: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textDecorationStyle: 'solid',
  }
});

