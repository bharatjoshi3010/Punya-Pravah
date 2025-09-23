import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home from './screens/Home'
import { data } from './assets/templeList'

export default function App() {
  return (
    <SafeAreaView>
      <Home />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})