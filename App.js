import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function DrawerMenu(props) {
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        height: 200,
        backgroundColor: '#363636',
      }}
    >
      <Text style={{ color: 'white', paddingHorizontal: 20, fontSize: 20 }}>
        Founder's Third
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#242424',
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>14 members</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#242424',
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Invite +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <View
      style={{
        backgroundColor: '#242424',
        flex: 1,
      }}
    >
      <Text>Hello</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        edgeWidth={100}
        drawerStyle={{
          backgroundColor: '#242424',
          width: 350,
        }}
        drawerContent={(props) => <DrawerMenu {...props} />}
      >
        <Drawer.Screen name='HomeScreen' component={HomeScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
