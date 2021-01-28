import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import wordList from './wordList.jsx';

function Dwayne(props) {

    const { navigation } = props;
    const [values, setValues] = useState([
        {label: "value 1", value: "Value 1 means you are temperemental", freq: 0},
        {label: "value 2", value: "Value 2 means you hate pizzas", freq: 0},
        {label: "value 3", value: "Value 3 means you love oreos", freq: 0},
        {label: "value 4", value: "Value 4 means you are a charming one", freq: 0},
        {label: "value 5", value: "Value 5 means you DID STOLE THOSE COOKIES", freq: 0},
    ])
    const [display, setDisplay] = useState("");
    const [update, setUpdate] = useState(0);

    const handlePress = value => {
        setDisplay(value);
        console.log(wordList());
        for(let i = 0; i < values.length; i++) {
            if(values[i]['value'] == value) {
                setUpdate(i);
                break;
            }
        }
    }

    return (
        <View>
            <Text>hello from the Dwayne component</Text>
            {/* <Button 
                onPress={()=>{
                    // let temp = [...boops];
                    // temp[0]++;
                    setBoops({...boops, value2:5});
                    console.log(boops['value2']);
                }}
                title="Value 1"
            /> */}
            <RadioForm
                radio_props={values}
                initial={-1}
                onPress={handlePress}
            />
            {
                display ? (
                    <Text>SHOW THIS: {display}</Text>
                ) : null
            }
            <Text>{"\n\n\n"}***************************************</Text>
            <Text>This should happen in the background</Text>
            <Text>***************************************</Text>
            <Text>Value 1 has been chosen: {values[0]['freq']} times</Text>
            <Text>Value 2 has been chosen: {values[1]['freq']} times</Text>
            <Text>Value 3 has been chosen: {values[2]['freq']} times </Text>
            <Text>Value 4 has been chosen: {values[3]['freq']} times</Text>
            <Text>Value 5 has been chosen: {values[4]['freq']} times</Text>
            <Text>***************************************</Text>
            <Button
                title="Submit"
                onPress={()=>{
                    let tempArr = [...values];
                    tempArr[update]['freq']++;
                    setValues(tempArr);
                }}
            />
            <Button
                title="Home"
                onPress={()=>{navigation.navigate("IntroScreen")}}
            />
        </View>
    );
}
export default Dwayne;
