import { Alert, Button, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//navigation imports
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../components/RootNavigator'
import { useNavigation } from '@react-navigation/native'

//for login 
import { useAuth } from '../../context/AuthContext';


type loginProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>


export default function LogIn({ route }: loginProps) {
    

    const { session, signin } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handleSubmit = async () => {
        // console.log("youfind me")
        // console.log(signin)
        signin({ email, password })
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.signInPage}>
                <View style={styles.loginCard}>
                    <View style={styles.heading}>
                        <Text style={styles.headingTxt}>Log In</Text>
                    </View>
                    <View style={styles.inputs}>
                        <View>
                            <Text style={[styles.inputFieldHeadingTxt, styles.emailHead]}>Email</Text>
                        </View>
                        <View>
                            <TextInput
                                style={[styles.inputBox]}
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text);
                                }}
                                placeholder='Enter your mail' />
                        </View>
                        <View>
                            <Text style={ [styles.inputFieldHeadingTxt, styles.passHead]}>Password</Text>
                        </View>
                        <View>
                            <TextInput
                                value={password}
                                style={styles.inputBox}
                                onChangeText={(text) => {
                                    setPassword(text);
                                }}
                                placeholder='Password'
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View style={styles.btnFiled}>

                        <View style={styles.btnView}>
                            <Pressable onPress={handleSubmit} style={styles.loginBtn}>
                                
                                    <View>
                                        <Text style={styles.logTxt}>Login</Text>
                                    </View>
                                
                            </Pressable>
                        </View>
                        <View style={styles.registerTxt}>

                            <Text style={
                                {
                                    fontSize : 16,
                                    color:'#6a6767ff',
                                    fontWeight: '600'
                                }
                            }>Dont't have a account,  </Text>
                            <TouchableOpacity
                            onPress={()=>{navigation.push('SignUp')}}
                            ><Text style={{
                                color: 'blue',
                                 fontSize : 16,
                                fontWeight: '600'
                            }}>Register Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    signInPage: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center'

    },
    loginCard: {
        marginHorizontal: 20,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 50,

        // alignContent:'center',
        // alignItems : 'center',
        paddingTop: 25,
        borderRadius: 20,
        elevation: 4
    },
    heading: {
        // flex:1,
        marginTop : 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    headingTxt: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    },
    inputs: {
        // flex : 1
    },
    inputFieldHeadingTxt: {
        fontSize: 22,
        color: "black",
        fontWeight: '800',
    },
    inputBox: {
        marginTop: 6,
        marginBottom: 20,
        borderBottomWidth: 1,
        padding: 0,
        fontSize: 25,
        borderBottomColor: 'black'
    },
    emailHead:{
        marginTop:5
    },
    passHead:{
        marginTop:10
    },
    btnFiled: {
        // flex:1,,
        marginTop: 20,
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    btnView: {
        flexDirection: 'row'
    },
    registerTxt:{
        flexDirection :'row'
    },
    loginBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: 'blue',
        paddingVertical: 15,
        // paddingHorizontal : 50,
        // borderWidth : 2,
        borderRadius: 10
    },
    logTxt: {
        color: 'white',
        fontSize: 28,
        fontWeight: "900"
    }
})