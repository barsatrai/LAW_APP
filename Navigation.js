// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './App/Pages/Welcome';
import Login from './App/Pages/Login';
import Signup from './App/Pages/Signup';
import Home from './App/Pages/Home';
import Profile from './App/Pages/Profile';
import History from './App/Pages/History';
import Books from './App/Pages/Books';
import EditProfile from './App/Pages/EditProfile';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="History" component={History}/>
        <Stack.Screen name="Books" component={Books}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
