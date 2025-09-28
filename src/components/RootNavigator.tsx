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
import Details from '../screens/Details';
import Dreamplace from '../screens/Dreamplace';
import Token from '../screens/Token';
import TokenBook from '../screens/TokenBook';


export type RootStackParamList ={
  LogIn : undefined,
  SignUp : undefined,
  Home : {sessionId: string, userName : string},
  Deatils : {detailObj: object},
  Dreamplace : undefined,
  Token : undefined,
  TokenBook : {detailObj: object}
  
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
    // console.log("hello",useAuth())  //for debugging
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
        <Stack.Screen
          name = 'Deatils'
          component= {Details}
        />
        <Stack.Screen
          name = 'Dreamplace'
          component= {Dreamplace}
        />
        <Stack.Screen
          name = 'Token'
          component= {Token}
        />
        <Stack.Screen
          name = 'TokenBook'
          component= {TokenBook}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})