import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'  
import Home from '../screens/Home';
import LogIn from '../screens/LogIn';
import { useAuth } from '../../context/AuthContext';

export type RootStackParamList ={
  LogIn : undefined,
  Home : {sessionId: string, userName : string},
  deatils : {detailObg: object}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
    console.log("hello",useAuth())
    const {session} = useAuth()
    const initial = (!session)?'LogIn' : 'Home'
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initial} screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name = 'Home'
          component={Home}
        />
        <Stack.Screen
          name = 'LogIn'
          component={LogIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})