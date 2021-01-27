import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function IntroScreen() {
    return (
        <View>
            <View style={{height:0, flex:0}}>
                <ImageBackground source={require('../assets/geran-de-klerk-Jmw2Ardu2YM-unsplash.jpg')} style = {styles.backgroundImage} />
            </View>
            <View style={styles.appBox}>
                <Text style={styles.appName} numberOfLines={1}>Discovery</Text>
                <Image source={require('../assets/vectorstock_27510217.png')} style = {{height:130, width:85}} />
                <Text style={styles.paragraph}>Inspired by the work of best-selling author Mark Manson, our goal is to help you uncover the values most important to you and use the power of reflection to acheive your goals.</Text>
            </View>
            <View style={styles.middleBody}>
                <Text style={styles.button}>Begin</Text>
                <Text style={styles.attribution}>Background Photo by Geran de Klerk on Unsplash</Text>
                <Text style={styles.attribution}>Logo designed by litonmee (Image #27510217 at VectorStock.com)</Text>
            </View>
        </View>
    );
}

export default IntroScreen;

const styles = StyleSheet.create({
    appBox: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        top: 18,
    },
    appName: {
        fontSize: 43,
        fontWeight: 'bold',
        color: '#dad2cf',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    attribution: {
        flex: 0,
        fontSize: 8,
        color: 'darkgrey',
    },
    backgroundImage: {
        flex: 0, 
        height: 568, 
        width: 350,
        resizeMode: 'stretch',
        overflow: 'visible',
    },
    middleBody: {
        flex: 1.6,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    paragraph: {
        color: '#004972',
        fontSize: 18,
        fontWeight: 'normal',
        width: 285,
        top: 12,
        borderRadius: 20,
        backgroundColor: 'rgba(218, 210, 207, 0.6)',
        textAlign: 'center',
        overflow: 'hidden',
        padding: 4,
    },
    button: {
        backgroundColor: '#004972',
        color: '#dad2cf',
        bottom: 8,
        width: '40%',
        fontSize: 26,
        textAlign: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 4,
    },
})