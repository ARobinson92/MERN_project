import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, Button } from "react-native";

function Dwayne(props) {

    const { navigation } = props;

    const [values, setValues] = useState([0, 0, 0, 0, 0]);

    return (
        <View>
            <Text>hello from the Dwayne component</Text>
            <Button
                onPress={() => {
                let temp = [...values];
                temp[0]++;
                setValues(temp);
                }}
                title="Value 1"
            />
            <Button
                onPress={() => {
                let temp = [...values];
                temp[1]++;
                setValues(temp);
                }}
                title="Value 2"
            />
            <Button
                onPress={() => {
                let temp = [...values];
                temp[3]++;
                setValues(temp);
                }}
                title="Value 3"
            />
            <Button
                onPress={() => {
                let temp = [...values];
                temp[3]++;
                setValues(temp);
                }}
                title="Value 4"
            />
            <Button
                onPress={() => {
                let temp = [...values];
                temp[4]++;
                setValues(temp);
                }}
                title="Value 5"
            />
            <Text>Score of value 1: {values[0]}</Text>
            <Text>Score of value 2: {values[1]}</Text>
            <Text>Score of value 3: {values[2]}</Text>
            <Text>Score of value 4: {values[3]}</Text>
            <Text>Score of value 5: {values[4]}</Text>
        </View>
    );
}
export default Dwayne;
