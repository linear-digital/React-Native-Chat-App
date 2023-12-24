import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import home from '../assets/style';

const TopNavigation = () => {
    return (
        <View style={home.topbar}>
            <TouchableOpacity>
                <Image style={{
                    width: 18,
                    height: 14
                }} source={require('../../image/bars.png')} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Chats</Text>
            <TouchableOpacity>
                <Image style={{
                    width: 14,
                    height: 14
                }} source={require('../../image/search.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default TopNavigation;
