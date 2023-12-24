import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

const SocialLogin = () => {
    return (
        <View>
            <View style={styles.devider}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#EDEDED' }} />
                <Text style={{ marginHorizontal: 10, color: 'gray' }}>or</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#EDEDED' }} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.logo} source={require('../image/google.png')} />
                <Text style={styles.text}>Continue With Google</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        // backgroundColor: '#4490ff',
        padding: 13,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#EDEDED",
        marginTop: 20,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
    },
    text: {
        color: 'gray',
        fontSize: 15,
        marginStart: 15
    },
    logo: {
        width: 20,
        height: 20,
    },
    devider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }
})



export default SocialLogin;
