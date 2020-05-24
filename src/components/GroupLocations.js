import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { globalStyles } from '../GlobalStyles.js';

import { Location } from '../components/Locations';

export function GroupLocations() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.placesContainer}>
        <Text style={styles.placesText}>Places</Text>
        <Icon
          name='menu'
          color='#fff'
          size={20}
          style={{
            paddingHorizontal: 10,
          }}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <Location name='Founders' />
        <Location name='Plinth' />
        <Location name='Gym' />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  placesContainer: {
    flexDirection: 'row',
    backgroundColor: globalStyles.mainColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placesText: {
    backgroundColor: globalStyles.mainColor,
    color: globalStyles.lightColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: globalStyles.mainColor,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
