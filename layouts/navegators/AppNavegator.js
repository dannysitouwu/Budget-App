import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './layouts/AppScreen'; // Pantalla principal
import ExpenseDescription from './layout/ExpenseDescription'; // Otra pantalla de ejemplo

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="ExpenseDescription" component={ExpenseDescription} />
    </Stack.Navigator>
  );
}