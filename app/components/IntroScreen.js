import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function IntroScreen(props) {
    return (
        <View style={styles.appName}>
            <Text>Application Name</Text>
            
        </View>
    );
}

export default IntroScreen;

const styles = StyleSheet.create({
    appName: {
        fontSize: 36,
        color: 'white',
        backgroundColor: 'darkOliveGreen',
        flex: 1,
    }
})