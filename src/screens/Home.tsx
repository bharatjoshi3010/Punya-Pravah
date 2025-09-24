import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Temple from '../components/Temple'

//navigational imports
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({navigation}: HomeProps) {
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