import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//navigation imports
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type loginProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>

export default function LogIn({route}: loginProps) {

    const [emial, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.signInPage}>
        <View style={styles.loginCard}>
        <View style={styles.heading}>
            <Text style={styles.headingTxt}>Log In</Text>
        </View>
        <View style={styles.inputs}>
        <View>
            <Text style={styles.inputFieldHeadingTxt}>Email</Text>
        </View>
        <View>
            <TextInput 
            style={styles.inputBox}
            value={emial}
            onChangeText={(text)=>{
                setEmail(text);
            }}
            placeholder='Enter your mail / mobile no....'/>
        </View>
        <View>
            <Text style={styles.inputFieldHeadingTxt}>Password</Text>
        </View>
        <View>
            <TextInput 
            value={password}
            style={styles.inputBox}
            onChangeText={(text)=>{
                setPassword(text);
            }}
            placeholder='Password'
            secureTextEntry
            />
        </View>
        </View>
        <View style={styles.btnFiled}>
            <View style={styles.btnView}>
            <Button
        title="I do not have a Account"
        color="blue"
        onPress={() => Alert.alert('Button Pressed!')}
      />
      </View>
      <View style={styles.btnView}>
            <Button
        title="Login"
        color="blue"
        onPress={() => Alert.alert('Login Done !')}
      />
      </View>
      
        </View>
      </View>
    
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   signInPage : {
    flex:1,
    backgroundColor : 'orange',
    justifyContent:'center'
    
   },
   loginCard:{
    marginHorizontal : 50

   },
   heading:{
    // flex:1,
    justifyContent :'center',
    alignItems :'center',
    marginBottom : 30
   },
   headingTxt:{
    color : 'black',
    fontSize : 30,
    fontWeight:'bold',
   },
   inputs:{
    // flex : 1
   },
   inputFieldHeadingTxt:{
    fontSize : 20,
    color : "black",
    fontWeight : '800',
   },
   inputBox:{
    marginTop : 6,
    marginBottom : 20,
    borderBottomWidth: 1,
    padding :0,
    borderBottomColor : 'black'
   },
   btnFiled:{
    // flex:1,,
    marginTop:20,
    flexDirection : 'row',
    justifyContent :"space-evenly",
    alignItems :'center'
   },
   btnView:{

   }
})