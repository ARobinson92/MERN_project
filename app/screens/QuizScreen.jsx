import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from "react-native-simple-radio-button";
import wordList from "../components/wordList.js";
import axios from "axios";
import stylesheet from "../components/stylesheet.js";
//key=: 1fd93f78-0bc6-4fd2-b7f4-0e5b6124d23d
function QuizScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [complete, setComplete] = useState(false);
    const [update, setUpdate] = useState(0);
    const [values, setValues] = useState([]);
    const [counter, setCounter] = useState(0);
    const [pointers, setPointers] = useState([0, 1, 2, 3, 4, 5]);
    const [definitions, setDefinitions] = useState([]);
    const WordList = wordList();
    const [showMe, setshowMe] = useState([]);
    const styles = stylesheet();

    useEffect(() => {
        let temp = [];
        for (var i = 0; i < WordList.length; i++) {
            const word = WordList[i];
            axios
                .get(
                    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1fd93f78-0bc6-4fd2-b7f4-0e5b6124d23d`
                )
                .then((res) => {
                    console.log(res.data[0]);
                    var singleVal = {
                        label: word,
                        value: res.data[0].shortdef,
                        freq: 0,
                    };
                    temp.push(singleVal);
                    if (temp.length >= WordList.length) {
                        values.push(temp);
                        setLoaded(true);
                    }
                })
                .catch((err) => {
                    console.log("There was an error: ", err);
                    Alert.alert(
                        "There was a problem loading the quiz. Please check your connection and try again."
                    );
                });
        }
    }, []);

    const handlePress = (value) => {
        //Picks out the one they clicked on, setting its index in values[0] to 'update'.
        setDefinitions(value);
        for (let i = 0; i < values[0].length; i++) {
            if (values[0][i]["value"] == value) {
                setUpdate(i);
                break;
            }
        }
    };

    const buttonPress = () => {
        setCounter(counter + 1); //Increments a counter every time a value is discarded
        if (counter == values[0].length - 5) {
            //If the counter gets to five less than the total number of words,
            setComplete(true); //The 'complete' state is set to TRUE, revealing the results section.
            let tempReturn = [];
            for (let i = 0; i < 6; i++) {
                if (values[0][pointers[i]]["freq"] == 0) {
                    tempReturn.push(values[0][pointers[i]]["label"]);
                }
            }
            setshowMe(tempReturn);
        }
        let tempArr = [...values[0]]; //Every time, the frequency value of update, which was set above, is incremented...
        tempArr[update]["freq"]++;
        values.pop();
        values.push(tempArr); //...and returned to the values array.
        let temp = [...pointers];
        // Alert.alert("Value : " + tempArr[update]["freq"]); //An alert lets user know that the value was incremented
        for (let i = 0; i < pointers.length; i++) {
            if (temp[i] == update) {
                //Whichever pointer is pointing at the value the user selected...
                for (let j = 0; j < values[0].length; j++) {
                    if (!temp.includes(j) && values[0][j]["freq"] != 1) {
                        temp[i] = j; //Is set to the next value that is neither pointed at nor incremented
                        i = pointers.length;
                        break;
                    }
                }
            }
        }
        setDefinitions("");
        setPointers(temp); //And returned to it's state in 'pointer'.
    };

    const returnHome = () => {
        navigation.navigate("IntroScreen");
    };

    return (
        <View style={styles.appPageContainer}>
            {complete ? (
                <View style={styles.appPageContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Your results:</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.result}>{showMe[0]}</Text>
                        <Text style={styles.result}>{showMe[1]}</Text>
                        <Text style={styles.result}>{showMe[2]}</Text>
                        <Text style={styles.result}>{showMe[3]}</Text>
                        <Text style={styles.result}>{showMe[4]}</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.appPageContainer}>
                    {loaded ? (
                        <View style={styles.appPageContainer}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.header}>
                                    Choose the option you care about LEAST from
                                    the values below:
                                </Text>
                            </View>
                            <View style={styles.formContainer}>
                                <RadioForm
                                    style={styles.RadioForm}
                                    radio_props={[
                                        values[0][pointers[0]],
                                        values[0][pointers[1]],
                                        values[0][pointers[2]],
                                        values[0][pointers[3]],
                                        values[0][pointers[4]],
                                        values[0][pointers[5]],
                                    ]}
                                    initial={-1}
                                    onPress={handlePress}
                                />
                            </View>
                            <View style={styles.definitionsContainer}>
                                {definitions.length != 0 ? (
                                    <View>
                                        <Text>
                                            Definition 1: {definitions[0]}
                                        </Text>
                                        <Text>
                                            Definition 2: {definitions[1]}
                                        </Text>
                                        <Text>
                                            Definition 3: {definitions[2]}
                                        </Text>
                                    </View>
                                ) : null}
                            </View>
                            <View>
                                <Text
                                    onPress={buttonPress}
                                    style={styles.button}
                                >
                                    Continue
                                </Text>
                                <Text
                                    onPress={returnHome}
                                    style={styles.button}
                                >
                                    Home
                                </Text>
                            </View>
                        </View>
                    ) : (
                        <Text style={styles.announcement}>
                            The quiz information is downloading.
                        </Text>
                    )}
                </View>
            )}
        </View>
    );
}

export default QuizScreen;
