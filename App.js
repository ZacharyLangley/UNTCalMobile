import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components
import Main from './src/components/Main';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
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
