import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './tabs/home';
import Comunidade from './tabs/comu';
import Perfil from './tabs/perfil';
import Kit from './tabs/kit';
import Escreva from './tabs/escreva';
import Calendario from './tabs/calendario';
import Login from './login';
import Cadastro from './cadastro';
import CrieSuaConta from './tabs/criarconta';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }} 
      />
      <Tab.Screen 
        name="Comunidade" 
        component={Comunidade} 
        options={{
          tabBarLabel: 'Comunidade',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-multiple" size={size} color={color} />
          )
        }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man" size={size} color={color} />
          )
        }} 
      />
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName="TabNavigator"
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CrieSuaConta" component={CrieSuaConta} />
      <Stack.Screen name="Escreva" component={Escreva} />
      <Stack.Screen name="Kit" component={Kit} />
      <Stack.Screen name="Calendario" component={Calendario} />
    </Stack.Navigator>
  );
}
