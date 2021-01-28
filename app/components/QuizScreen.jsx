import React, { useState, useEffect } from "react";
import { Alert, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import wordList from './wordList.jsx';
import axios from 'axios';


function QuizScreen(props) {
    const { navigation } = props;

//Some of these will need to be eventually declared in app.js and sent here as additional props
//so that they can be transferred to the results page
    const [loaded, setLoaded] = useState(false);
    const [update, setUpdate] = useState(0); //Will be set to the index of the selected radiobutton
    const [values, setValues] = useState([]); //Will be filled with all of our words and definitions
    const WordList = wordList();
    let definitions = [];
    let counter = 0;
    //key=: 1fd93f78-0bc6-4fd2-b7f4-0e5b6124d23d
    useEffect(()=>{
        for (var i=0; i<WordList.length; i++) {
            var word = WordList[i];
            axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1fd93f78-0bc6-4fd2-b7f4-0e5b6124d23d`)
            .then ((res) => {
                console.log(res);
                console.log('definitions: ', definitions);
                var singleVal = {
                    'label': res.data[0].meta.id,
                    'value': res.data[0].shortdef,
                    'freq': 0,
                }
                console.log('SingleVal: ', singleVal);
                let temp = [...values];
                temp.push(singleVal);
                setValues(temp);
                if(values.length >= WordList.length - 1) {
                    console.log('Setting loaded to true');
                    setLoaded(true);
                }  
            })
            .catch(err=>{
                console.log('There was an error: ', err)
                Alert.alert("There was a problem loading the quiz. Please check your connection and try again.");
            });
        }
    },[]);

    const handlePress = value => {
        setDefinitions(value);
        Alert.alert(wordList);
        for(let i = 0; i < values.length; i++) {
            if(values[i]['value'] == value) {
                setUpdate(i);
                break;
            }
        }
    }

    const buttonPress = () => {
        let tempArr = [...values];
        let tempNum = update + 1;
        tempArr[update]['freq']++;
        setValues(tempArr);
        Alert.alert('Value' + tempNum + ' : ' + tempArr[update]['freq']);
    }

    const returnHome = () => {
        navigation.navigate("IntroScreen");
    }

    return (
        <View>
        {loaded?
            <View>
                <View>
                    <Text style={styles.instructions}>Choose the option you care about LEAST from the values below:</Text>
                </View>
                <View>
                    <RadioForm
                        radio_props={values}
                        initial={-1}
                        onPress={handlePress}
                    />
                </View>
                <View>
                    {
                        definitions ? (
                            <Text>SHOW THIS: {definitions}</Text>
                        ) : null
                    }
                </View>
                <View>
                    <Text 
                        onPress={buttonPress} 
                        style={styles.button}>Continue</Text>
                    <Text onPress={returnHome} style={styles.button}>Temporary home button</Text>
                </View>
            </View>:
            <Text>The quiz information is downloading.</Text>}
        </View>);
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