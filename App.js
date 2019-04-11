import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ justifyContent: 'space-between', marginTop: 100 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          {[...Array(3)].map((_, index) => (
            <View key={index} style={styles.container}>
              <View style={styles.content} />
              <View style={styles.content} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  content: {
    backgroundColor: 'blue',
    height: 20,
    width: 20,
  },
};
