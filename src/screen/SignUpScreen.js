// src/LoginScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import SocialLogin from '../components/SocialLogin';
const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [show, setShow] = useState(true)
    const [error, setError] = useState("")
    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address !");
        }
        else {
            console.log(email, password, name);
            setError("");
        }


    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../image/logo.png')} />
            {
                error && <Text style={styles.error}>{error}</Text>
            }
            <View style={styles.form}>
                <Input
                    style={styles.input}
                    placeholder="Full Name"
                    label="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    autoCapitalize="none"
                />
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

                <Button disabled={!email || !password || !name} style={styles.button} title="Sign Up" onPress={handleLogin} />
                <SocialLogin />
                <View style={styles.navigate}>
                    <Text>Alrady Have an account?</Text>
                    <Text style={styles.text1} onPress={() => navigation.navigate('Login')} > Login</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 15
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontWeight: '500',
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
        marginTop: 10,
    },
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "white",
        height: "100%",
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

export default SignUpScreen;
