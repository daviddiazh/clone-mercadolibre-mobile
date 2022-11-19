import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { TestScreen } from '../screens/TestScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  SearchScreen: undefined,
  TestScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="SearchScreen" component={ SearchScreen } />
      <Stack.Screen name="TestScreen" component={ TestScreen } />
    </Stack.Navigator>
  );
}