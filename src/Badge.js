// @flow

import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'column',
    backgroundColor: 'blue',
    height: 23,
    alignItems: 'center',
    paddingRight: 4,
  },
  rank: {
    marginLeft: 8,
    marginRight: 0,
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
};
export const Badge = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.rank}>999</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.rank}>999</Text>
    </View>
  </View>
);
