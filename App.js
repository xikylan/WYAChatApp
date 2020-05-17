import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ChatScreen } from './src/screens/ChatScreen.js';
import { DrawerMenu } from './src/components/DrawerMenu.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        edgeWidth={100}
        drawerStyle={{
          backgroundColor: '#fff',
          width: '80%',
        }}
        drawerContent={() => <DrawerMenu />}
      >
        <Drawer.Screen name='ChatScreen' component={ChatScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
