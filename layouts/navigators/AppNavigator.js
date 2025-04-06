import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../AppScreen'; // Pantalla principal
import ExpenseDescription from '../ExpenseDescription'; // Otra pantalla de ejemplo

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Mainapp' component={MainScreen} />
      <Stack.Screen name='ExpenseDescription' component={ExpenseDescription} />  
      {/* <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false }} />
      <Stack.Screen name="ExpenseDescription" component={ExpenseDescription} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
}

        // <Stack.Screen name='Start' component={StartScreen} options={{ headerShown: false }} />
        // <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ headerShown: false }} />