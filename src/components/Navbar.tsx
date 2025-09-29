import { Image, Modal, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { RootStackParamList } from '../components/RootNavigator'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../context/AuthContext';
import { MenuProvider } from 'react-native-popup-menu'

type MenuOptionType = {
    label: string;
    value: string;
};

const MENU_OPTIONS: MenuOptionType[] = [
    { label: 'Token Status', value: 'token' },
    { label: 'Dreamplace', value: 'dreamplace' },
    { label: 'AboutUs', value: 'aboutus' },
    { label: 'Logout', value: 'logout' },
];

interface OptionMenuProps {
    onSelectOption: (value: string) => void;
}
export default function Navbar({ headerText }: { headerText: string }) {

    const {session, username} = useAuth();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    //from here

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    // Ref to get the trigger button's position
    const triggerRef = useRef<View | null>(null);

    const openMenu = () => {
        if (triggerRef.current) {
            // 1. Get the position and dimensions of the trigger view
            triggerRef.current.measure(
                (fx: number, fy: number, w: number, h: number, px: number, py: number) => {
                    // Set the menu to appear below and slightly to the left of the dots
                    // 150 is the width of the menu container defined in the styles
                    setPosition({
                        x: px - 150 + w -50,
                        y: py + h + 5 - 45, // Position 5 units below the button
                    });
                    setIsVisible(true);
                }
            );
        }
    };

    const closeMenu = () => setIsVisible(false);

    const handleOptionPress = (value: OptionMenuProps) => {
        if (value.toString() === 'token'){
            navigation.popToTop()
            navigation.push('Token')
        }
        else if (value.toString() === 'logout') {
            logOut();
        }
        else if (value.toString() === 'dreamplace') {
            navigation.popToTop()
            navigation.push('Dreamplace')
        }
        else if (value.toString() === 'aboutus') {
            navigation.popToTop()
            navigation.push('AboutUs')
        }
        closeMenu();
    };
    //to here

    const { signout } = useAuth()

    const logOut = async () => {
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
                                uri: 'https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?t=st=1759001153~exp=1759004753~hmac=1cfb03738af4484b3c60473e69f2b28685962c31d4001aeda6531c6fe129272d&w=1480'
                            }
                        }
                        style={styles.ImageLogo}
                    />
                    <View style={styles.userName}>
                        <Text style={styles.userNameTxt}>{headerText}</Text>
                    </View>
                </View>
                <View style={styles.icons}>
                    {/* <Pressable onPress={logOut}>
        <Image
            source={
                require('../assets/LogOut.png')
            }
            style={styles.log}
        /></Pressable> */}
                    <Pressable onPress={openMenu}
                        ref={triggerRef}
                    >
                        <Image
                            source={
                                require('../assets/Dots.png')
                            }
                            style={styles.threeDot}
                        />
                    </Pressable>
                    <Modal
                        visible={isVisible}
                        transparent={true}
                        animationType='none'
                        onRequestClose={closeMenu}
                    >
                        <TouchableWithoutFeedback onPress={closeMenu}>
                            <View style={styles.modalOverlay}>
                                <TouchableWithoutFeedback>
                                    <View
                                        style={[
                                            styles.menuContainer,
                                            { top: position.y, left: position.x },
                                        ]}
                                    >
                                        {MENU_OPTIONS.map((option) => (
                                            <Pressable
                                                key={option.value}
                                                onPress={() => handleOptionPress(option.value)}
                                                style={({ pressed }) => [
                                                    styles.menuItem,
                                                    pressed && styles.menuItemPressed,
                                                    option.value === 'logout' && styles.deleteItem,
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        styles.menuItemText,
                                                        option.value === 'logout' && styles.deleteText,
                                                    ]}
                                                >
                                                    {option.label}
                                                </Text>
                                            </Pressable>
                                        ))}
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#EF7722',
        paddingVertical: 11,
    },
    container: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',

    },
    ImageLogo: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icons: {
        flexDirection: 'row'
    },
    log: {
        marginRight: 15,
        height: 25,
        width: 25,
    },
    threeDot: {
        height: 25,
        width: 25,
    },
    userName: {
        paddingLeft: 15
    },
    userNameTxt: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'white'
    },
    // for the menu bar
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    menuContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 8,
        width: 200,
        // height: 200,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        overflow: 'hidden',
    },
    menuItem: { padding: 20 },
    menuItemPressed: { backgroundColor: '#f0f0f0' },
    menuItemText: { fontSize: 18, color: '#333', fontWeight :'700'  },
    deleteItem: { backgroundColor: '#ffdddd' },
    deleteText: { color: 'red', fontWeight: 'bold' },
})