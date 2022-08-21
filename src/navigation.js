import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home';
import CreateScreen from './screen/Create';

import React from 'react';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const CreateStack = () => (
  <Stack.Navigator initialRouteName="Create">
    <Stack.Screen name="Create" component={CreateScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Create" component={CreateStack} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return <MyTabs />;
}

export default Navigation;
