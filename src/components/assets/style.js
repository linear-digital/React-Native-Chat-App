import { StyleSheet } from "react-native";
import { indicatorColor } from "./color";

const home = StyleSheet.create({
    homeContainer: {
        height: "100%",
        backgroundColor: "#F9F9F9",
        position: 'relative',
    },
    manuBar: {
        backgroundColor: "#fff",
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        width: '100%',
    },
    iconActive: {
        width: 44,
        height: 44
    },
    icon: {
        width: 23,
        height: 23,
    },
    topbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    body: {
        height: "100%",
        width: '100%',
    },
    navigation: {
        backgroundColor: "#F5F5F5",
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 5,
        margin: 10,
        justifyContent: "space-between",
        borderRadius: 20,
    },
    navigatorButton: {
        backgroundColor: "transparent",
        borderRadius: 20,
        height: '100%',
        width: "49%",
        justifyContent: "center",
        alignItems: "center",
    },
    navigatorButtonActive: {
        backgroundColor: "#fff",
        borderRadius: 20,
        height: '100%',
        width: "49%",
        justifyContent: "center",
        alignItems: "center",


    },
    chatContainer: {
        height: "auto",
        width: '100%',
        padding: 14,
        overflow: "scroll"
    },
    userCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginBottom: 10,
    },
    userImage: {
        width: 54,
        height: 54,
        borderRadius: 25,
    },
    activeUsers: {
        width: "100%",
        flexDirection: "row",
        height: 80,
        paddingHorizontal: 14,
        marginTop: 10
    },
    acriveUserImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
        position: "relative",
        borderWidth: 1,
        borderColor: indicatorColor
    },
    acriveUserImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        marginRight: 10,
    },


})

export default home