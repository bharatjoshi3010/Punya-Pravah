import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../components/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'


type DetailProps = NativeStackScreenProps<RootStackParamList, 'TokenBook'>

export default function TokenBook({ route }: DetailProps) {
    const { detailObj } = route.params
    const { id, name, location, famousFor, imageURL, extraPhotos, details } = detailObj
    return (
        <SafeAreaView style={{flex :1}}>
            <Navbar headerText={'Punya Pravah'} />
            <View style={styles.formField}>
                <View style={styles.heading}>
                    <Text style={styles.headingTxt}>Enter these details : </Text>
                </View>
                <View style={[styles.date, styles.field]}>
                    <Text style={styles.headingInput}>Date of visit</Text>
                    <View style={styles.dateInput}>
                        <TextInput
                            placeholder='Enter the date'
                            style={[styles.inputBox, ]}
                        />
                    </View>
                </View>
                <View style={[styles.peoples, styles.field]}>
                    <Text style={styles.headingInput}>No. of Devotee</Text>
                    <TextInput
                        placeholder='how many people are visiting with you ?'
                        style={[styles.peoples, styles.inputBox]}
                        keyboardType='number-pad'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    formField: {
        flex: 1,
        justifyContent: 'center',
        marginTop : 20,
        marginHorizontal : 10
    },
    heading:{
        marginBottom: 10
    },
    field:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent :'space-between'
    },
    headingTxt:{
        color:'black',
        fontSize : 22,
        fontWeight : 'bold'
    },
    headingInput:{
        color: 'black',
        fontSize : 18,
    },
    inputBox:{

    },

})