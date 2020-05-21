import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Badge, Avatar, Icon } from 'react-native-elements';

export function GroupLocations() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#333',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            backgroundColor: '#333',
            color: '#eee',
            paddingHorizontal: 20,
            paddingVertical: 10,
            fontWeight: 'bold',
          }}
        >
          Places
        </Text>
        <Icon
          name='menu'
          color='#fff'
          size={20}
          style={{
            paddingHorizontal: 10,
          }}
        />
      </View>

      <ScrollView
        style={{
          backgroundColor: '#333',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Location name='Founders' />
        <Location name='Plinth' />
        <Location name='Gym' />
      </ScrollView>
    </View>
  );
}

function Location(props) {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#555',
          marginBottom: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            {props.name}
          </Text>
          <Icon name='triangle-down' type='octicon' size={15} color='#999' />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Avatar
            rounded
            source={{ uri: 'https://placeimg.com/140/140/any' }}
            size={25}
          />
          <Text style={{ paddingLeft: 10, color: '#fff' }}>Ben H.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Avatar
            rounded
            source={{ uri: 'https://placeimg.com/140/140/any' }}
            size={25}
          />
          <Text style={{ paddingLeft: 10, color: '#fff' }}>Amanda M.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <Avatar
            rounded
            source={{ uri: 'https://placeimg.com/140/140/any' }}
            size={25}
          />
          <Text style={{ paddingLeft: 10, color: '#fff' }}>Carla S.</Text>
        </View>
      </View>
    </View>
  );
}
