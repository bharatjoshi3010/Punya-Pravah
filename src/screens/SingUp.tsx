import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { use, useState } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../components/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPathFromState, useNavigation } from '@react-navigation/native'
import { useAuth } from '../../context/AuthContext'


type SignupProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>





export default function SingUp({ route }: SignupProps) {

  const [allOk, setAllok] = useState(true)

  const {session, signup} = useAuth()

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [confirm, setConfirm] = useState('')
  const [name, setName] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const isFormValid = () => {
  // Simple email validation
      const emailRegex = /^\S+@\S+\.\S+$/;
      // Phone number must be 7-15 digits
      const phoneRegex = /^\d{7,15}$/;
      return (
        name.trim().length >= 2 &&          // Name must be at least 2 characters
        emailRegex.test(email) &&           // Valid email format
        phoneRegex.test(phone) &&           // Valid phone format
        password.length >= 8 &&             // Password minimum 6 characters
        password === confirm                // Passwords must match
      );
  };

 const handleSignup = (name : string, email:string, password:string, phone:string) => {
  console.log(email)
      signup(email, password, name, phone)
 }

  return (
    <SafeAreaView style={{flex : 1, justifyContent : 'center', backgroundColor:'orange'}}>
    <KeyboardAvoidingView>
      <View style={styles.signUpCard}>
        <View style={styles.heading}>
                                <Text style={styles.headingTxt}>Sign Up</Text>
                            </View>
      <Text style={styles.label}>Name</Text>

    <TextInput
        value={name}
        onChangeText={(t) => {setName(t), setAllok(true)}}
        placeholder="your name here"
        autoCapitalize="none"
        style={[styles.input, {color:'black'}]}
        returnKeyType="next"
        placeholderTextColor="#adacacff"
      />
<Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(t) => {setEmail(t), setAllok(true)}}
        placeholder="you@example.com"
        keyboardType="email-address"
        style={[styles.input, {color:'black'}]}
        returnKeyType="next"
        placeholderTextColor="#adacacff"
      />


      <Text style={styles.label}>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={(t) => {setPhone(t.replace(/[^0-9]/g, '')), setAllok(true)}}
        placeholder="1234567890"
        keyboardType="phone-pad"
        style={[styles.input, {color:'black'}]}
        returnKeyType="next"
        placeholderTextColor="#adacacff"
      />


      <Text style={styles.label}>Password</Text>
      <View style={styles.rowInput}>
        <TextInput
          value={password}
          onChangeText={(text) => {setPassword(text), setAllok(true)}}
          placeholder="At least 8 characters"
          secureTextEntry={!showPassword}
          style={[styles.input, styles.flexInput, {color:'black'}]}
          returnKeyType="next"
          placeholderTextColor="#adacacff"
        />
        <TouchableOpacity
          onPress={() => {setShowPassword((s) => !s), setAllok(true)}}
          style={styles.toggleBtn}
          accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
        >
          <Text style={styles.toggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        value={confirm}
        onChangeText={(s)=>{setConfirm(s), setAllok(true)}}
        placeholder="Re-type password"
        secureTextEntry={!showPassword}
        style={[styles.input, {color:'black'}]}
        returnKeyType="done"
        placeholderTextColor="#adacacff"
      />


      {password.length > 0 && confirm.length > 0 && password !== confirm ? (
        <Text style={styles.errorText}>Passwords do not match</Text>
      ) : null}

      {allOk ? <View></View> : <Text style={{color:'red'}}>There is some error in your details</Text>}

      <TouchableOpacity
        style={[styles.button, !isFormValid() && styles.buttonDisabled]}
        onPress={() => {
          if(!isFormValid()){
            {
              setAllok(false)
            }
          }
          else{
          handleSignup(name, email, password, phone)
          }
        }}
        // disabled={!isFormValid()}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>


      <View style={styles.footerRow}>
        <Text style={styles.small}>Already have an account?</Text>
        <TouchableOpacity onPress={() => {navigation.pop()}}>
          <Text style={styles.link}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
</KeyboardAvoidingView >
</SafeAreaView>
  )

  
}

const styles = StyleSheet.create({
  signUpCard:{
    marginHorizontal : 10,
    padding : 10,
    backgroundColor : 'white',
    borderRadius : 10,
    paddingBottom : 40
  },
  safe: { 
    flex: 1, 
    backgroundColor: '#f6f8fb' 
  },
  heading: {
        // flex:1,
        marginTop : 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    headingTxt: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    },
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 6,
  },
  title: { 
    fontSize: 22, 
    fontWeight: '700', 
    marginBottom: 12, 
    color: '#111' 
  },
  label: { 
    fontSize: 16, 
    color: 'black', 
    marginTop: 10, 
    marginBottom: 6,
    fontWeight: '700'
  },
  input: {
    borderWidth: 1,
    borderColor: '#e6e9ef',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  rowInput: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  flexInput: { 
    flex: 1, 
    marginRight: 10 
  },
  toggleBtn: { 
    paddingVertical: 8, 
    paddingHorizontal: 10 
  },
  toggleText: { 
    color: '#2563eb', 
    fontWeight: '600' 
  },
  button: {
    marginTop: 18,
    backgroundColor: '#0051ffff',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonDisabled: { 
    backgroundColor: '#003cffff' 
  },
  buttonText: { 
    color: 'white', 
    fontWeight: '700', 
    fontSize: 16 
  },
  footerRow: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 14 
  },
  small: { 
    color: '#6b7280' 
  },
  link: { 
    color: '#2563eb', 
    fontWeight: '600' 
  },
  errorText: { 
    color: '#dc2626', 
    marginTop: 6, 
    fontSize: 13 
  },
})