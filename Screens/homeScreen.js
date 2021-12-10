import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    ActivityIndicator
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-ratings';
import axios from 'axios';

axios.defaults.baseURL = 'https://yts.mx/api/v2/list_movies.json';

const HomeScreen = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get('/posts')
            .then((res) => {
                if (res.data.data.movie_count > 0) {
                    setResponse(res.data.data.movies);
                    setloading(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ marginTop: 50 }}>
            <View style={styles.header}>
                <Text style={styles.heading}>Movie Turbo</Text>
            </View>
            <View style={{paddingTop:15}}>
                {loading ? (
                    <ActivityIndicator size='large' />
                ) : (
                    <View>
                        {/* {error &&
                            (<Text>{error.message}</Text>
                        )} */}
                        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                            {response.length > 0 && response.map((item, index) => (
                                <View style={[styles.sectionContainer, styles.shadowProp,]} key={index}>
                                    <View style={styles.leftSide}>
                                        <Image
                                            style={styles.tinyLogo}
                                            source={{
                                                uri: item.large_cover_image
                                            }}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={styles.rightSide}>

                                        <Text numberOfLines={2} style={styles.headerText}>{item.title}</Text>
                                        <View style={{ alignItems: 'flex-start', marginTop: -20 }}>
                                            <AirbnbRating isDisabled={true} count={5} defaultRating={item.rating} size={20} />
                                        </View>
                                        <View style={styles.bottomView}>
                                            {item.genres.length > 1 ?
                                                item.genres.map((item, index) => (
                                                    <View>
                                                        <Text style={styles.bottomText}>{item} | </Text>
                                                    </View>
                                                )) :

                                                item.genres.map((item, index) => (
                                                    <View>
                                                        <Text style={styles.bottomText}>{item}</Text>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                    </View>
                                </View>
                            ))}

                        </ScrollView>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: '#f3f3f3',
    },
    heading: {
        textAlign: 'center',
        fontSize: 22,
        color: '#4895e7'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    headerText: {
        fontSize: 18,
        fontWeight: '300'
    },
    bottomText: {
        fontSize: 15
    },
    bottomView: {
        marginTop: 20,
        flexDirection: 'row'
    },
    rightSide: {
        // backgroundColor:'red',
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    leftSide: {
        // width: 150,
        // height: 100
    },
    sectionContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        // paddingVertical: 45,
        marginBottom: 15,
        // width: '100%',
        // marginVertical: 10,
        // elevation:3,
        // flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        // alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    buttonText: {
        color: '#ffffff'
    },
    inputField: {
        borderRadius: 10
    },
    tinyLogo: {
        width: 130,
        height: 150,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

});

export default HomeScreen;