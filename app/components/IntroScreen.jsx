import React from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";

function IntroScreen({navigation}) {
    // setState({foo:"bar"})
    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <ImageBackground
                    source={require("../assets/geran-de-klerk-Jmw2Ardu2YM-unsplash.jpg")}
                    style={styles.backgroundImage}
                />
                <View style={styles.appBox}>
                    <Text style={styles.appName} numberOfLines={1}>
                        Discovery
                    </Text>
                    <Image
                        source={require("../assets/vectorstock_27510217.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.paragraph}>
                        Inspired by the work of best-selling author Mark Manson, our
                        goal is to help you uncover the values most important to you
                        and use the power of reflection to acheive your goals.
                    </Text>
                </View>
                <View style={styles.bottomBox}>
                    <Text style={styles.button} onPress={() => navigation.navigate("Dwayne")}>To Dwayne.jsx</Text><Text style={styles.button} onPress={() => navigation.navigate("QuizScreen")}>To QuizScreen.jsx</Text>
                    <Text style={styles.attribution}>
                        Background Photo by Geran de Klerk on Unsplash
                    </Text>
                    <Text style={styles.attribution}>
                        Logo designed by litonmee (Image #27510217 at
                        VectorStock.com)
                    </Text>
                </View> 
                <View style={styles.bottomBox}>
                    <Text style={styles.button} onPress={()=> navigation.navigate("Results")}>Results</Text>
                </View>  
            </View>
        </View>
    );
}

export default IntroScreen;

const styles = StyleSheet.create({
    appBox: {
        position: 'absolute',
        top: 20,
        left: 10,
        right: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 10,
        top: 18,
    },
    appName: {
        padding: 10,
        fontSize: 43,
        fontWeight: "bold",
        color: "#dad2cf",
        alignItems: "flex-start",
        justifyContent: "flex-start",
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
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#004972",
        color: "#dad2cf",
        bottom: 8,
        width: "40%",
        fontSize: 15,
        textAlign: "center",
        borderRadius: 10,
        overflow: "hidden",
        padding: 4,
    },
    container: {
        flex: 9,
        resizeMode: 'stretch',
    },
    content: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    logo: {
        height: 130,
        width: 85,
        bottom: 10,
    },
    paragraph: {
        color: "#004972",
        fontSize: 15,
        fontWeight: "normal",
        width: 285,
        top: 12,
        borderRadius: 20,
        backgroundColor: "rgba(218, 210, 207, 0.6)",
        textAlign: "center",
        overflow: "hidden",
        padding: 4,
    },
});
