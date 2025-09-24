import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home from './screens/Home'
import { data } from './assets/templeList'
import SignIn from './screens/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList ={
  SignIn : undefined,
  Home : {sessionId: string, userName : string},
  deatils : {detailObg: object}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <SignIn/>
    </>
  )
}

const styles = StyleSheet.create({})