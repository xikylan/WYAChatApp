import React from 'react';
import { View } from 'react-native';
import { DrawerHeader } from './DrawerHeader.js';
import { GroupLocations } from './GroupLocations.js';

export function DrawerMenu() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 14 }}>
        <DrawerHeader />
        <GroupLocations />
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}
