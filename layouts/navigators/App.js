// // work
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './layouts/LogInScreen';
import SignInScreen from './layouts/SignInScreen';
import MainScreen from './layouts/AppScreen';
import SplashScreen from './layouts/SplashScreen';
import ExpenseDescription from './layouts/ExpenseDescription';
// import AppNavigator from './layouts/navegators/AppNavegator';
// import AppNavigator from './layouts/navigators/AppNavegator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name='LogIn' component={LoginScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Start' component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name='AppNavigator' component={AppNavigator} options={{ headerShown: false }} /> */}
        <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ExpenseDescription' component={ExpenseDescription} options={{headerShown: false}}/>  
        {/* {<Stack.Screen name='AppNavegator' component={AppNavegator} options={{ headerShown: false }} />} */}
        {/* // {<Stack.Screen name='ExpenseDescription' component={ExpenseDescription} />} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}