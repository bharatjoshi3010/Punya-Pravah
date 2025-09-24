import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Temple from '../components/Temple'

//navigational imports
import { RootStackParamList } from '../components/RootNavigator'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../context/AuthContext';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({route}: HomeProps) {

  // const {sessionId, userName} = route.params
  const {signout, user, session} = useAuth()


    const handleSubmit = async () => {
        console.log("youfind me")
        signout();

        
    };

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  if (!session) {navigation.replace('LogIn')} 

  return (
    <SafeAreaView>
      <View>
        <Navbar/>
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>jdhbsajhfbjasdhf;hasd;fhbasdjhfshadfuhad;sjhfjasdhbf;jsdahfashdfhads</Text>
      </TouchableOpacity>
      <View>
        <Temple/>
      </View>
      
    </SafeAreaView>  
  )
}

const styles = StyleSheet.create({})