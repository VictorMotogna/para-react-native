import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Splash';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Splash></Splash>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
