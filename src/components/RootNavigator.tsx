import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// for authentication  
import { useAuth } from '../../context/AuthContext';

//screens
import Home from '../screens/Home';
import LogIn from '../screens/LogIn';
import SingUp from '../screens/SingUp';


export type RootStackParamList ={
  LogIn : undefined,
  SignUp : undefined,
  Home : {sessionId: string, userName : string},
  deatils : {detailObg: object},
  
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
        <Stack.Screen
          name = 'SignUp'
          component={SingUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})