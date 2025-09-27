import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

//Navigational imports
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../components/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Deatils'>

export default function Details({ route }: DetailProps) {

    const { detailObj } = route.params
    const { id, name, location, famousFor, imageURL } = detailObj
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar name={name} />
            <ScrollView style={{ flex: 1 }}>
                <Text></Text>
            </ScrollView>
            <View>
                <View style={styles.buttonField}>
                    <View style={[styles.btn]}>
                        <TouchableOpacity>
                            <Text style={styles.btnTxt}>Add to Dream Place</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btn]}>
                        <TouchableOpacity>
                            <Text style={styles.btnTxt}>Book a token</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonField:{
        flexDirection : "row",
        justifyContent :'space-between',
        marginHorizontal : 8,
        marginTop : 8, 
    },
    btn:{
        backgroundColor : '#EF7722',
        width: ((screenWidth)/2)-12,
        alignItems : 'center',
        justifyContent :'center',
        height : 60,
        borderRadius : 20,
        marginBottom : 20
    },
    btnTxt:{
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18

    }
})