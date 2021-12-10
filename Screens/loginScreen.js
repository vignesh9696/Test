import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import HomeScreen from './homeScreen';

const LoginScreen = () => {
    const [show, setShow] = useState(true);
    handleSubmit = () => {
        setShow(false)
    }
    return show == false ? (<HomeScreen />) : (
        <View style={styles.sectionContainer}>
            <View style={{ paddingTop: 100, alignSelf: 'center', justifyContent: 'center' }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/loader.png')}
                    resizeMode='contain'
                />
            </View>
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <TextInput style={styles.textInput} placeholder="User Name" placeholderTextColor="black"></TextInput>
                <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="black"></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 20,
        borderRadius: 50,
        marginBottom: 20,
        fontSize: 17
    },
    sectionContainer: {
        flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20
    },
    centerText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16
    },
    tinyLogo: {
        width: 250,
        height: 200
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#4895e7",
        padding: 20,
        borderRadius: 50,
        marginTop: 25,
        marginHorizontal: 50
    }
});

export default LoginScreen;
