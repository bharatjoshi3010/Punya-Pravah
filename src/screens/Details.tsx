import { Alert, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

//Navigational imports
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../components/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import { useAuth } from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { timing } from 'react-native-reanimated'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Deatils'>

export default function Details({ route }: DetailProps) {

    const {session, username} = useAuth();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const { detailObj } = route.params
    const { id, name, location, famousFor, imageURL, extraPhotos, details, timings} = detailObj
    const [images] = useState(extraPhotos);
    console.log(extraPhotos)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Navbar headerText={'Punya Pravah'} />
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    style={styles.imgScroll}
                    data={images}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    // style={styles.thumbnailContainer}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity >
                            <Image
                                source={{ uri: item }}
                                style={[
                                    styles.img,

                                ]}
                            />
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.detailBox}>
                    <View style={styles.heading}>
                        <Text style={styles.headingTxt}>{name}</Text>
                    </View>
                    <View style={styles.loc}>
                        <Text style={styles.locTxt}>{location}</Text>
                    </View>
                    <View style={styles.ff}>
                        <Text style={styles.ffTxt}>{famousFor}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsTxt}>{details}</Text>
                    </View>
                    <View style={styles.timingHead}>
                        <Text style={styles.timingHeadTxt}>Timings : </Text>
                    </View>
                    
                    <View style={styles.timing}>
                        <Text style={styles.timingTxt}>{timings}</Text>
                    </View>
                </View>
            </ScrollView>
            <View>
                <View style={styles.buttonField}>
                    <View >
                        <TouchableOpacity style={[styles.btn]} onPress={() => {
                            ToastAndroid.show(`${name} added to your dream place`, ToastAndroid.SHORT);
                        }}>
                            <Text style={styles.btnTxt}>Add to Dream Place</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={[styles.btn]} onPress={() => {
                            // Alert.alert(
                            //     'Token Generated',
                            //     'Check your token details on main dashboard',
                            //     [
                            //         {
                            //             text: 'Cancel Token',
                            //             onPress: () => console.log('Cancel'),
                            //             style: 'cancel', // iOS shows as bold
                            //         },
                            //         {
                            //             text: 'Ok',
                            //             onPress: () => console.log('ok'),
                            //             style: 'destructive', // iOS style for destructive actions
                            //         },
                            //     ],
                            //     { cancelable: false } // User cannot dismiss by tapping outside
                            // );
                            navigation.push('TokenBook', {detailObj: detailObj})
                        }}>
                            <Text style={styles.btnTxt}>Book a token</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imgScroll: {
        marginTop: 35,
        // marginHorizontal: 10
    },
    img: {
        height: 300,
        width: screenWidth - 20,
        marginHorizontal: 10
    },
    buttonField: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginTop: 8,
    },
    detailBox: {
        marginHorizontal: 10
    },
    heading: {
        marginTop: 35
    },
    headingTxt: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    loc: {

    },
    locTxt: {
        color: '#6e6d6dff',
        fontWeight: '700'
    },
    ff: {
        marginTop: 20
    },
    ffTxt: {
        color: 'black',
        fontSize: 17,
        fontWeight: '700'
    },
    details: {
        marginTop: 30
    },
    detailsTxt: {
        color: 'black',
        fontSize: 16
    },
    timingHead:{
        marginTop: 20
    },
    timingHeadTxt:{
        color: 'black',
        fontSize: 20,
        fontWeight : 'bold'
    },
    timing:{
        marginTop : 5
    },
    timingTxt:{
         color: 'black',
        fontSize: 16
    },
    btn: {
        backgroundColor: '#EF7722',
        width: ((screenWidth) / 2) - 12,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        marginTop: 10,
        borderRadius: 20,
        marginBottom: 20
    },
    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18

    }
})