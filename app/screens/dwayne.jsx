import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";
import wordList from "../components/wordList.js";
import stylesheet from '../components/stylesheet.js'
import getValuesList from '../components/getValuesList.js';

function Dwayne({navigation}) {
    const styles = stylesheet();
    const [display, setDisplay] = useState("");
    const [update, setUpdate] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [values, setValues] = useState([
        { label: "value 1", value: "Value 1 means you are temperemental", freq: 0 },
        { label: "value 2", value: "Value 2 means you hate pizzas", freq: 0 },
        { label: "value 3", value: "Value 3 means you love oreos", freq: 0 },
        { label: "value 4", value: "Value 4 means you are a charming one", freq: 0 },
        { label: "value 5", value: "Value 5 means you DID STOLE THOSE COOKIES", freq: 0 },
    ]);
    

    const finList = getValuesList();
    let finListResult = null;
    finList
        .then(res => {
            console.log(res);
            finListResult = res[0];
            setLoaded(true);
            return finListResult;
        })
        .catch(err => console.log("error: ", err));

    const handlePress = (value) => {
        setDisplay(value);
        console.log(wordList());
        for (let i = 0; i < values.length; i++) {
            if (values[i]["value"] == value) {
                setUpdate(i);
                break;
            }
        }
    };

    return (
        <View style={styles.appPageContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}> Dwayne screen</Text>
            </View>
            {/* <View style={styles.formContainer}>
                <RadioForm 
                    style={styles.radioform}
                    radio_props={values}
                    initial={-1}
                    onPress={handlePress}
                />
            </View>
            {display ? <View><Text style ={styles.normal}>SHOW THIS: {display}</Text></View> : null}
            <View style={styles.textContainer}>
                <Text style={styles.normal}>{"\n\n\n"}***************************************</Text>
                <Text style={styles.normal}>This should happen in the background</Text>
                <Text style={styles.normal}>***************************************</Text>
                <Text style={styles.normal}>Value 1 has been chosen: {values[0]["freq"]} times</Text>
                <Text style={styles.normal}>Value 2 has been chosen: {values[1]["freq"]} times</Text>
                <Text style={styles.normal}>Value 3 has been chosen: {values[2]["freq"]} times{" "}</Text>
                <Text style={styles.normal}>Value 4 has been chosen: {values[3]["freq"]} times</Text>
                <Text style={styles.normal}>Value 5 has been chosen: {values[4]["freq"]} times</Text>
                <Text style={styles.normal}>***************************************</Text>
            </View>

            <Button
                title="Submit"
                onPress={() => {
                    let tempArr = [...values];
                    tempArr[update]["freq"]++;
                    setValues(tempArr);
                }}
            /> */}
            {loaded?
            <View style={styles.textContainer}>
                <Text style={styles.normal}>
                    Here is the moment you've been waiting for: {}
                </Text>
            </View>:null}
            <Button
                title="Home"
                onPress={() => {
                    navigation.navigate("IntroScreen");
                }}
            />
        </View>
    );
}
export default Dwayne;
