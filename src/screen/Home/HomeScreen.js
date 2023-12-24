import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import BottomNavigation from '../../components/Bars/BottomNavigation';
import home from '../../components/assets/style';
import TopNavigation from '../../components/Bars/TopNavigation';
import ChatUserCard from '../../components/Cards/ChatUserCard';
import ActiveUser from '../../components/Cards/ActiveUser';

const HomeScreen = () => {
    const [activeScreen, setActivescreen] = useState('Messages');
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (
            async () => {
                setLoading(true)
                const response = await fetch('https://dummyjson.com/users')
                const data = await response.json()
                setLoading(false)
                setUsers(data.users)
            }
        )()
    }, [])
    return (
        <View>
            {
                loading ? <View style={{
                    alignContent: "center",
                    justifyContent: "center",
                    height: "100%"
                }}>
                    <ActivityIndicator color="#5632FB" size="large" />
                </View> :
                    <View style={home.homeContainer}>

                        <TopNavigation />
                        <View style={home.body}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={home.activeUsers}>
                                {
                                    users.map((user, index) => <ActiveUser user={user} key={index} />)
                                }
                            </ScrollView>
                            <View style={home.navigation}>
                                <TouchableOpacity onPress={() => setActivescreen("Messages")} style={activeScreen === "Messages" ? home.navigatorButtonActive : home.navigatorButton}>
                                    <Text style={{ color: "#5632FB", fontSize: 14, fontWeight: 500 }}>All Messages </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setActivescreen("Requests")} style={activeScreen === "Requests" ? home.navigatorButtonActive : home.navigatorButton}>
                                    <Text style={{ color: "#5632FB", fontSize: 14, fontWeight: 500 }}>Requests</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={home.chatContainer}>
                                {
                                    users.map((user, index) => <ChatUserCard user={user} key={index} />)
                                }
                            </ScrollView>
                        </View>

                        <BottomNavigation />
                        <StatusBar />
                    </View>
            }
        </View>
    );
}



export default HomeScreen;
