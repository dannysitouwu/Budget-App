import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './layouts/LogInScreen';
import SignInScreen from './layouts/SignInScreen';
import MainScreen from './layouts/AppScreen';
import SplashScreen from './layouts/SplashScreen';
// import LoginScreen from './layouts/LogInScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="LogIn" component={LoginScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}