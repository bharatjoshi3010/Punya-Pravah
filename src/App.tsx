import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//screenImports
import Home from './screens/Home'
import LogIn from './screens/LogIn'

//navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'      

export type RootStackParamList ={
  SignIn : undefined,
  Home : {sessionId: string, userName : string},
  deatils : {detailObg: object}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name='SignIn'
          component={LogIn}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})