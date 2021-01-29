import React from "react";
import stylesheet from '../components/stylesheet.js';
import {Image, ImageBackground, Text, View} from "react-native";

function IntroScreen({navigation}) {
    const styles = stylesheet();
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
                        goal is to help you establish the values that are most important to you. 
                        We hope that this will empower you to acheive your goals.
                    </Text>
                </View>
                <View style={styles.bottomBox}>
                    {/* <Text style={styles.button} onPress={() => navigation.navigate("Dwayne")}>To Dwayne.jsx</Text>*/}
                    <Text style={styles.button} onPress={() => navigation.navigate("QuizScreen")}>Begin</Text> 
                    <Text style={styles.attribution}>Background Photo by Geran de Klerk on Unsplash</Text>
                    <Text style={styles.attribution}>Logo designed by litonmee (Image #27510217 at VectorStock.com)</Text>
                </View> 
            </View>
        </View>
    );
}

export default IntroScreen;
