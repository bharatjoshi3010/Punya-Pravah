import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'

export default function Token() {
    return (
        <SafeAreaView>
            <Navbar headerText='hello'></Navbar>
            <View>
                <Text>Token</Text>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({})