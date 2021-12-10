import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import MainScreen from './mainScreen';

const delay = 3;
const SplashScreen = () => {
    const [show, setShow] = useState(true);

    useEffect(
        () => {
            let timer1 = setTimeout(() =>
                setShow(false)
                , delay * 1000);
            return () => {
                clearTimeout(timer1);
            };
        }, []);
    return show ? (
        <View style={styles.sectionContainer}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/loader.png')}
                resizeMode='cover'
            />
        </View>
    ) :
        (
            <MainScreen />
        )

};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    tinyLogo: {
        width: 300,
        height: 200
    }
});

export default SplashScreen;
