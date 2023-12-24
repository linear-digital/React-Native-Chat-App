import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text } from 'react-native-elements';

const NavigateIntoPage = () => {
    return (
        <View>
            <Text>Don't have an account?</Text>

            <Button title="Sign Up" onPress={() => navigation.navigate('Register')} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default NavigateIntoPage;
