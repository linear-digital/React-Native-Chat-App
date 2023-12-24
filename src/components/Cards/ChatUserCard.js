import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import home from '../assets/style';
import { primary } from '../assets/color';

const ChatUserCard = ({ user }) => {
    const [message, setMessage] = useState("")
    useEffect(() => {
        if (user.university.length < 30) {
            setMessage(user.university)
        }
        else {
            const mes = user.university.slice(0, 30) + "..."
            setMessage(mes)
        }

    }, [user])
    return (
        <TouchableOpacity style={home.userCard}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={{ uri: user.image }} style={home.userImage} />
                <View style={{ marginLeft: 14 }}>
                    <Text style={{ fontSize: 14, fontWeight: 500, color: "#1E2022" }}>{user.firstName} {user.lastName}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 400, color: "#77838F", marginTop: 7 }}>
                        {message}
                    </Text>
                </View>
            </View>
            <Text style={{ fontSize: 12, fontWeight: 500, color: primary }}>
                5mins
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default ChatUserCard;
