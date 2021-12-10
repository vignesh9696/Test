import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginScreen from './loginScreen';

const MainScreen = () => {
    const [show, setShow] = useState(true);
    handleSubmit =()=>{
        setShow(false)
    }
    return show ==false ? (<LoginScreen />):(
        <View style={styles.sectionContainer}>
            <View style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/loader.png')}
                resizeMode='contain'
            />
            </View>
            <View style={{justifyContent:'space-around',flex:1,alignItems:'center'}}>
                <Text style={styles.centerText}>WELCOME</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>GETTING START</Text>
                </TouchableOpacity>
            </View>
        </View>
    
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#ffffff',
        paddingBottom:50
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
        height:200
    },
    button: {
        backgroundColor: "#4895e7",
        padding: 20,
        paddingHorizontal: 40,
        borderRadius: 50
    }
});

export default MainScreen;
