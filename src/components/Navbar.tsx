import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../components/RootNavigator'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../context/AuthContext';

export default function Navbar({headerText} :  { headerText: string }) {

    const {signout} = useAuth()
    
        const handleSubmit = async () => {
            console.log("youfind me")
            signout();            
        };
        
  return (
    <View style={styles.nav}>
      <View style={styles.container}>
        <View style={styles.userDetails}>
        <Image
            source={
                {
                    uri :'https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?t=st=1759001153~exp=1759004753~hmac=1cfb03738af4484b3c60473e69f2b28685962c31d4001aeda6531c6fe129272d&w=1480'
                }
            }
            style={styles.ImageLogo}
        />
        <View style={styles.userName}>
            <Text style={styles.userNameTxt}>{headerText}</Text>
        </View>
        </View>
        <View style={styles.icons}>
            <Pressable onPress={handleSubmit}>
        <Image
            source={
                require('../assets/LogOut.png')
            }
            style={styles.log}
        /></Pressable>
        <Image
            source={
                require('../assets/Dots.png')
            }
            style={styles.threeDot}
        />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    nav:{
        backgroundColor : '#EF7722',
        paddingVertical : 11,
    },
    container:{
        marginHorizontal : 15,
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : 'center',
        
    },
    ImageLogo:{
        width : 40,
        height : 40,
        borderRadius : 50
    },
    userDetails:{
        flexDirection: 'row',
        alignItems : 'center'
    },
    icons:{
        flexDirection:'row'
    },
    log:{
        marginRight:15,
        height: 25,
        width:25,
    },
    threeDot:{
        height: 25,
        width:25,
    },
    userName:{
        paddingLeft : 15
    },
    userNameTxt:{
        fontSize : 25,
        fontWeight : "bold",
        color : 'white'
    }
})