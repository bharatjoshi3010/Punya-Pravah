import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../components/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import DatePicker from 'react-native-date-picker';


type DetailProps = NativeStackScreenProps<RootStackParamList, 'TokenBook'>

export default function TokenBook({ route }: DetailProps) {

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const { detailObj } = route.params

    const { id, name, location, famousFor, imageURL, extraPhotos, details } = detailObj
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar headerText={'Punya Pravah'} />
            <View style={styles.formField}>
                <View style={styles.heading}>
                    <Text style={styles.headingTxt}>Enter these details : </Text>
                </View>
                <View style={[styles.date, styles.field]}>
                    <Text style={styles.headingInput}>Date of visit</Text>
                    <View >
                    <View style={styles.dateInput}>
                        <View style={styles.dateBox}>
                        <Text style={styles.dateTxt}>{date.toDateString()}</Text></View>
                        <Button title="Select Date" onPress={() => setOpen(true)} />

                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode="date" // options: date, time, datetime
                            onConfirm={(selectedDate) => {
                                setOpen(false);
                                setDate(selectedDate);
                            }}
                            onCancel={() => setOpen(false)}
                        />
                    </View>
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
                <View>
                    <TouchableOpacity>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    formField: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 10
    },
    heading: {
        marginBottom: 10
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headingTxt: {
        color: 'black',
        fontSize: 22,
        fontWeight: '800'
    },
    headingInput: {
        color: 'black',
        fontSize: 18,
        fontWeight : '700'
    },
    inputBox: {

    },
    dateInput:{
        flexDirection : 'row',
        alignItems :'center',
    },
    dateBox:{
        marginRight : 15
    },
    dateTxt:{
        color : 'black'
    }

})