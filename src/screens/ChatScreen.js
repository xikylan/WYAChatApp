import React from 'react';
import { View, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export function ChatScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        containerStyle={{ backgroundColor: '#4B75FF' }}
        centerComponent={
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            Group Chat
          </Text>
        }
        centerContainerStyle={{
          justifyContent: 'flex-start',
        }}
        leftComponent={
          <Icon
            name='menu'
            type='material'
            color='#fff'
            size='22'
            onPress={() => navigation.openDrawer()}
          />
        }
      />
    </View>
  );
}
