import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Navbar() {
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
            <Text style={styles.userNameTxt}>Hello Alice</Text>
        </View>
        </View>
        <Image
            source={
                require('../assets/Dots.png')
            }
            style={styles.threeDot}
        />
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