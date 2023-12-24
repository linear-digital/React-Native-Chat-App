import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import home from '../assets/style';
import { indicatorColor } from '../assets/color';

const ActiveUser = ({ user }) => {
    return (
        <TouchableOpacity style={home.acriveUserImageContainer}>
            <Image source={{ uri: user.image }} style={home.acriveUserImage} />
            <View style={{
                position: "absolute",
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: indicatorColor,
                right: 0,
                bottom: 0,
                zIndex: 16565,
            }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default ActiveUser;
