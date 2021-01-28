import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Picker} from '@react-native-picker/picker';

function QuizScreen(props) {
    const { navigation } = props;
    return (
        <View>
            <View>
                <Text style={styles.instructions}>Choose the option you care about LEAST from the values below:</Text>
            </View>
            <View>
                <Text style={styles.values}>(Value)</Text>
                <Picker>
                    <Picker.Item label="label" value="value"/>
                    <Picker.Item label="label2" value="value2"/>
                    <Picker.Item label="label3" value="value3"/>
                </Picker>
            </View>
            <View>
            <Text onPress={()=>navigation.navigate("QuizScreen")} style={styles.button}>Continue</Text>
            </View>
        </View>
    );
}

export default QuizScreen;

const styles = StyleSheet.create({
    instructions: {
        fontSize: 36,

    },
    values: {
        fontSize: 20,
    },
    button: {
        backgroundColor: "#004972",
        color: "#dad2cf",
        bottom: 8,
        width: "40%",
        fontSize: 26,
        textAlign: "center",
        borderRadius: 10,
        overflow: "hidden",
        padding: 4,
    },
})