import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "./app/screens/IntroScreen.jsx";
import Dwayne from "./app/screens/dwayne.jsx";
import QuizScreen from "./app/screens/QuizScreen.jsx";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" intialRouteName="IntroScreen">
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="Dwayne" component={Dwayne} />
                <Stack.Screen name="QuizScreen" component={QuizScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
