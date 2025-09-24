import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Temple from '../components/Temple'

//navigational imports
import { RootStackParamList } from '../components/RootNavigator'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({route}: HomeProps) {

  // const {sessionId, userName} = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
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