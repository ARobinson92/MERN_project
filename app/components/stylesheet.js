import React from "react";
import { StyleSheet } from "react-native";

function stylesheet() {
    const stylesheet = StyleSheet.create({
        announcement: {
            flex: 1,
            alignItems: "center",
        },
        appBox: {
            top: 18,
            top: 20,
            left: 10,
            right: 10,
            borderRadius: 10,
            position: "absolute",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        appName: {
            padding: 10,
            fontSize: 43,
            color: "#dad2cf",
            fontWeight: "bold",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        },
        appPageContainer: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: "absolute",
            justifyContent: "center",
            backgroundColor: "#F6F4F4",
            alignContent: "space-between",
        },
        attribution: {
            fontSize: 8,
            color: "darkgrey",
        },
        backgroundContainer: {
            flex: 1,
            resizeMode: "stretch",
        },
        backgroundImage: {
            flex: 1,
            resizeMode: "stretch",
        },
        bottomBox: {
            left: 10,
            right: 10,
            bottom: 10,
            alignItems: "center",
            position: "absolute",
        },
        button: {
            margin: 8,
            bottom: 12,
            padding: 4,
            width: "40%",
            fontSize: 20,
            color: "#51A0D5",
            borderRadius: 10,
            overflow: "hidden",
            alignSelf: "center",
            textAlign: "center",
            backgroundColor: "#004972",
        },
        container: {
            flex: 9,
            resizeMode: "stretch",
        },
        content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: "absolute",
        },
        definitionsContainer: {
            left: "5%",
            maxWidth: "90%",
            flex: 1,
            fontSize: 10,
            color: "#0D0709",
        },
        formContainer: {
            flex: 2,
            right: "10%",
            marginTop: 60,
            marginLeft: 20,
            alignSelf: "center",
            textAlign: "center",
            position: "relative",
        },
        header: {
            top: 0,
            left: 0,
            right: 0,
            padding: 20,
            fontSize: 32,
            marginBottom: 15,
            shadowRadius: 30,
            color: "#F6F4F4",
            shadowOpacity: 0.8,
            shadowColor: "grey",
            position: "absolute",
            borderBottomWidth: 1,
            backgroundColor: "#51A0D5",
            borderBottomColor: "black",
        },
        headerContainer: {
            flex: 1,
        },
        result: {
            fontSize: 22,
        },
        logo: {
            width: 85,
            bottom: 10,
            height: 130,
        },
        paragraph: {
            top: 12,
            width: 285,
            padding: 4,
            fontSize: 15,
            color: "#004972",
            borderRadius: 20,
            overflow: "hidden",
            textAlign: "center",
            fontWeight: "normal",
            backgroundColor: "rgba(218, 210, 207, 0.6)",
        },
        normal: {
            flex: 1,
            fontSize: 10,
            color: "#0D0709",
        },
        radioform: {
            color: "#0D0709",
            position: "relative",
        },
        textContainer: {
            flex: 2,
            marginLeft: 20,
        },
    });
    return stylesheet;
}

export default stylesheet;
