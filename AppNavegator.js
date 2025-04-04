import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './layouts/LogInScreen'; // Pantalla de inicio de sesión
import SignInScreen from './layouts/SignInScreen'; // Pantalla de registro
import MainScreen from './layouts/AppScreen'; // Pantalla principal
import SplashScreen from './layouts/SplashScreen'; // Pantalla de carga inicial

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* Pantalla de carga inicial */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* Pantalla de inicio de sesión */}
        <Stack.Screen name="Start" component={StartScreen} />
        {/* Pantalla de registro */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        {/* Pantalla principal */}
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}