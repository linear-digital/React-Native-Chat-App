// src/LoginScreen.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import SocialLogin from '../components/SocialLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const handleLogin = async () => {
        const url = "https://openly-steady-chigger.ngrok-free.app/api/users/login";

        // Implement your login logic here
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address !");
        }
        else {
            setLoading(true)
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
            setLoading(false)

            if (res.status === 200) {
                const data = await res.json();
                await AsyncStorage.setItem('token', data.accessToken);
                setError("");
                // console.log(data)
            }
            else {
                // setError(data.message);
                const data = await res.json();
                console.log(data.error)
                setError(data.error);
            }

        }
    };


    return (
        <View
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
            {

                loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                    :
                    <View  >
                        <Image style={styles.logo} source={require('../image/logo.png')} />
                        <Text style={styles.error}>{error}</Text>
                        <View style={styles.form}>
                            <Input
                                style={styles.input}
                                placeholder="Enter your email"
                                label="Email"
                                value={email}
                                keyboardType="email-address"
                                onChangeText={(text) => setEmail(text)}
                                autoCapitalize="none"
                            />
                            <View style={{ position: 'relative' }}>
                                <Text
                                    onPress={() => setShow(!show)}
                                    style={{ position: 'absolute', right: 20, top: 5, zIndex: 454 }}
                                >
                                    <FontAwesomeIcon
                                        icon={faEye}
                                    />
                                </Text>
                                <Input
                                    style={styles.input}
                                    placeholder="******"
                                    label="Password"
                                    secureTextEntry={show}
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}

                                />
                            </View>


                            <Button disabled={!email || !password} style={styles.button} title="Login" onPress={handleLogin} />
                            <SocialLogin />
                            <View style={styles.navigate}>
                                <Text>Don't have an account?</Text>
                                <Text style={styles.text1} onPress={() => navigation.navigate('SignUp')} > Register</Text>
                            </View>
                        </View>

                    </View >

            }

        </View>

    );
};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        textAlign: 'center',
        fontWeight: '500',
    },
    input: {
        fontSize: 15
    },
    text1: {
        color: "#4490ff",
        marginStart: 5,
        fontWeight: "600"
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    button: {
        borderRadius: 30,
        backgroundColor: 'pink'
    },
    navigate: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    form: {
        marginTop: 20,
    },
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
        height: '100%',
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 50,
        fontWeight: "600",
        color: "black",
        marginTop: 100,
    }
});

export default LoginScreen;
