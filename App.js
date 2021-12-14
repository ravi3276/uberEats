import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import ResturentDetails from './screens/ResturentDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  const screenOptions={
    headerShown: false,
  }
  return  
   <NavigationContainer>
  <Stack.Navigator initialRouteName="Home" initialScreenOptions={screenOptions}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ResturentDetails" component={ResturentDetails} />
  </Stack.Navigator>
</NavigationContainer>
}
