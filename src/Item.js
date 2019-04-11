// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { Badge } from './Badge';

export const Item = ({ containerStyles }) => (
  <View
    style={{ backgroundColor: 'white', height: 160, flex: 1, borderRadius: 3, ...containerStyles }}
  >
    <View style={{ height: 80, width: '100%' }}>
      <Badge rank={188} smallBadge />
    </View>
  </View>
);
