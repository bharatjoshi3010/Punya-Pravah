import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../components/RootNavigator'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../context/AuthContext';

const formatFirstName = (fullName: string) =>                   //this function helps to make the name look better
  fullName.trim().split(' ')[0].charAt(0).toUpperCase() + fullName.trim().split(' ')[0].slice(1).toLowerCase();  

export default function Navbar(name: any) {
    const myName = formatFirstName(name.name)

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
                    uri :'https://instagram.fbek1-1.fna.fbcdn.net/v/t51.2885-19/459189304_1615484525670530_3291100886867796257_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby42MTQuYzIifQ&_nc_ht=instagram.fbek1-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QF9xyk0588Sp9m41qqDgs9uDRoCcNmACkjsV0hSflsKcSOqfrrVwUEl6jmzshOZNEgOBsm-vFimCKh4DXxl4XdJ&_nc_ohc=_9pjXUkBI_8Q7kNvwHBpQ6W&_nc_gid=2HWFmPLIny4jpoKMkIWtsw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afb0jnr649UQAH3kwjm7RcPtA1hm5uhhlAhp4G9YjT6jzQ&oe=68D817F0&_nc_sid=7a9f4b'
                }
            }
            style={styles.ImageLogo}
        />
        <View style={styles.userName}>
            <Text style={styles.userNameTxt}>Hello {myName}</Text>
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
        paddingVertical : 10,
    },
    container:{
        marginHorizontal : 15,
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : 'center',
        
    },
    ImageLogo:{
        width : 45,
        height : 45,
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