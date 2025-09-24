import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//screenImports
import Home from './screens/Home'
import LogIn from './screens/LogIn'

//navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'  

//for login purpose
import { AuthProvider, useAuth } from '../context/AuthContext';
import RootNavigator from './components/RootNavigator'



export default function App() {
  

  return (
    <AuthProvider>
      <RootNavigator/>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})