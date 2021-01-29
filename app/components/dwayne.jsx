import React, { useState, useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import wordList from './wordList.jsx';

import getValuesList from './getValuesList.js';

function Dwayne(props) {
    const { navigation, globalState } = props;
    const [valuesList, setValuesList] = globalState;
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
    
    const myValueList = getValuesList();
    useEffect(()=> {
        setValuesList(myValueList);
    },[]);
    

    return (
        <View style = {styles.appPageContainer}>
            <Text style = {styles.header}>hello from the Dwayne component</Text>
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
            <Text style = {styles.normal}>{"\n\n\n"}***************************************</Text>
            <Text style = {styles.normal}>This should happen in the background</Text>
            <Text style = {styles.normal}>***************************************</Text>
            <Text style = {styles.normal}>Value 1 has been chosen: {values[0]['freq']} times</Text>
            <Text style = {styles.normal}>Value 2 has been chosen: {values[1]['freq']} times</Text>
            <Text style = {styles.normal}>Value 3 has been chosen: {values[2]['freq']} times </Text>
            <Text style = {styles.normal}>Value 4 has been chosen: {values[3]['freq']} times</Text>
            <Text style = {styles.normal}>Value 5 has been chosen: {values[4]['freq']} times</Text>
            <Text style = {styles.normal}>***************************************</Text>
            
            {valuesList.map((value, index) => {
                <View>
                    <Text style = {styles.dwayne}>{value.label}</Text>
                    <Text style = {styles.dwayne}>{value.value[0]}</Text>
                    <Text style = {styles.dwayne}>{value.freq}</Text>
                </View>
            })}

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


const styles = StyleSheet.create({
    appPageContainer: {
        
    },
    header: {

    },
    normal: {
        
    },
    dwayne: {
        backgroundColor: "yellow"
    }
})