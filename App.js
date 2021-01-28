import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IntroScreen from "./app/components/IntroScreen.jsx";
import Dwayne from "./app/components/dwayne.jsx";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" intialRouteName="IntroScreen">
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="Dwayne" component={Dwayne} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
