import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import home from '../assets/style';

const BottomNavigation = () => {
    return (
        <View style={home.manuBar}>
            <TouchableOpacity>
                <Image style={home.iconActive} source={require('../../image/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={home.icon} source={require('../../image/chat.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={home.icon} source={require('../../image/call.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={home.icon} source={require('../../image/bell.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={home.icon} source={require('../../image/user.png')} />
            </TouchableOpacity>

        </View>
    );
}



export default BottomNavigation;
