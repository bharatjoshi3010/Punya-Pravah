import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Temple from '../components/Temple'

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Navbar/>
      </View>
      <View>
        <Temple/>
      </View>
    </SafeAreaView>  
  )
}

const styles = StyleSheet.create({})