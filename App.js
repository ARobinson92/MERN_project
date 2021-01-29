import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useState} from 'react';

import IntroScreen from "./app/components/IntroScreen.jsx";
import Dwayne from "./app/components/dwayne.jsx";
import QuizScreen from "./app/components/QuizScreen.jsx";
import Results from "./app/components/Results.jsx";

const Stack = createStackNavigator();

export default function App() {
    const [valuesList, setValuesList] = useState(["if you are seeing this that is very good"]);
    const globalState = [valuesList, setValuesList];
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" intialRouteName="IntroScreen">
                <Stack.Screen name="IntroScreen" component={IntroScreen}/>
                <Stack.Screen name="Dwayne">
                    {() => <Dwayne globalState={globalState}/>}
                </Stack.Screen>
                <Stack.Screen name="QuizScreen">
                    {()=> <QuizScreen globalState={globalState}/>}
                </Stack.Screen>
                <Stack.Screen name="Results">
                    <Results globalState={globalState}/>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
