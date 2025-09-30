import { Alert, Button, Dimensions, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../components/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import DatePicker from 'react-native-date-picker';
import { useAuth } from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { databases } from '../../lib/appwrite'
import { APPWRITE_DATABASE_ID, APPWRITE_TABLE_TN } from '@env'
import { setSelectedLog } from 'react-native/types_generated/Libraries/LogBox/Data/LogBoxData'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
type DetailProps = NativeStackScreenProps<RootStackParamList, 'TokenBook'>



export default function TokenBook({ route }: DetailProps) {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [nod, setNod] = useState('');

    const { user, session } = useAuth()
    console.log(user);

    const formatFirstWord = (str: any) => {
        return str
            .trim()
            .split(/\s+/) // split by spaces
            .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const { detailObj } = route.params

    const { id, name } = detailObj

    const addToToken = async (userIdO, templeIdO, dateBook, people) => {
        console.log(userIdO, templeIdO, people, date)
        try {
            const response = await databases.createDocument(
                APPWRITE_DATABASE_ID, // Database ID
                APPWRITE_TABLE_TN,       // Table name
                'unique()',         // Row ID (auto-generated)
                {
                    date: dateBook,
                    userId: userIdO,
                    templeId: templeIdO.toString(),
                    noOfpepole: people
                }
            );

            console.log("Added to Guard:", response);
        } catch (error) {
            console.error("Error adding to Guard:", error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Navbar headerText={'Punya Pravah'} />
            <View style={styles.formField}>
                <View style={styles.heading}>
                    <Text style={styles.headingTxt}>Enter these details : </Text>
                </View>
                <View style={[styles.date, styles.field]}>
                    <Text style={styles.headingInput}>Date of visit :</Text>
                    <View >
                        <View style={styles.dateInput}>
                            <View style={styles.dateBox}>
                                <Text style={styles.dateTxt}>{date.toDateString()}</Text></View>
                            <TouchableOpacity onPress={() => setOpen(true)} style={styles.selectBtn}>
                                <Text style={styles.selectTxt}>Select</Text>
                            </TouchableOpacity>

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
                <View style={[styles.field, styles.people]}>
                    <Text style={styles.headingInput}>No. of Devotee :</Text>
                    <TextInput
                        value={nod}
                        onChangeText={(t) => setNod(t)}
                        placeholder='how many people are visiting with you ?'
                        style={[styles.peoples, styles.inputBox]}
                        keyboardType='numeric'
                        placeholderTextColor={'#746e6eff'}
                    />
                </View>

                <TouchableOpacity onPress={() => {
                    nod && Alert.alert(
                        'Confirm Details',
                        `Date : ${date.toDateString()} \nTemple : ${name} (${id}) \nGroup Lead : ${formatFirstWord(user.name)} \nNumber of people in group : ${nod}`,
                        [{
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                        },
                        {
                            text: 'Generate Token',
                            onPress: () => {
                                // console.log(date.toDateString())
                                addToToken(user.email, id, date.toDateString(), nod);
                                setNod('');
                                setDate(new Date());
                                ToastAndroid.show('Token Generated, You can find it on Dashboard -> Menu -> Token Status', ToastAndroid.SHORT);
                                navigation.popToTop()
                            },
                            style: 'destructive', // iOS style for destructive actions
                        },
                        ],
                        // { cancelable: false } // User cannot dismiss by tapping outside
                    );
                }}>
                    <View style={styles.btn}>
                        <Text style={styles.btnTxt}>Book Now</Text>
                    </View>
                </TouchableOpacity>

            </View >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    formField: {
        // flex: 1,
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 10
    },
    heading: {
        marginBottom: 30,
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    people: {
        marginTop: 20,
        // justifyContent : 'center',
        alignItems: 'center'
    },
    headingTxt: {
        color: 'black',
        fontSize: 22,
        fontWeight: '800'
    },
    headingInput: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700'
    },
    inputBox: {
        borderBottomWidth: 1,
        paddingVertical: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color : 'black'
    },
    dateInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateBox: {
        marginRight: 15
    },
    dateTxt: {
        color: 'black',
        fontSize: 18
    },
    selectBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 70,
        backgroundColor: 'blue',
        elevation: 4,
        borderRadius: 5
    },
    selectTxt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth - 20,
        backgroundColor: 'blue',
        height: 40,
        marginTop: 35,
        borderRadius: 10
    },
    btnTxt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    }

})