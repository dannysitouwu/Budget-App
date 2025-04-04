import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './layouts/AppScreen'; // Pantalla principal
// import AnotherScreen from './layouts/AnotherScreen'; // Otra pantalla de ejemplo

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Pantalla principal */}
      <Stack.Screen name="Main" component={MainScreen} />
      {/* Otra pantalla */}
      {/* <Stack.Screen name="Another" component={AnotherScreen} /> */}
    </Stack.Navigator>
  );
}