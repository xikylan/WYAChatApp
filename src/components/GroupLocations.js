import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Badge, Avatar } from 'react-native-elements';

export function GroupLocations() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: '#000',
          paddingHorizontal: 20,
          paddingVertical: 10,
          fontWeight: 'bold',
        }}
      >
        Places
      </Text>

      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Location />
        <Location />
        <Location />
      </ScrollView>
    </View>
  );
}

function Location() {
  return (
    <View style={{ paddingBottom: 30 }}>
      <Badge
        containerStyle={{
          flexDirection: 'row',
        }}
        badgeStyle={{
          borderRadius: 30,
          backgroundColor: '#F0F0F0',
          borderColor: '#F0F0F0',
          paddingHorizontal: 5,
          height: 25,
        }}
        value='Founders'
        textStyle={{
          color: '#000',
          fontSize: 12,
          fontWeight: 'bold',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
        }}
      >
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        ></Avatar>
        <View style={{ paddingHorizontal: 4 }}></View>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        ></Avatar>
        <View style={{ paddingHorizontal: 4 }}></View>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        ></Avatar>
      </View>
    </View>
  );
}
