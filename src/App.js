/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Item } from './Item';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ justifyContent: 'space-between', height: 280 }}>
        <View
          style={{ flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-around' }}
        >
          <Text>Coucou</Text>
          {[...Array(3)].map((_, index) => (
            <Item key={index} containerStyles={{ marginHorizontal: 16 }} />
          ))}
        </View>
      </View>
    );
  }
}
