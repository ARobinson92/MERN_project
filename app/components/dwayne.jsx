import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

function Dwayne(props) {

    const { navigation } = props;

    const [state, setState] = useState("");

    const [values, setValues] = useState([
        {label: "value 1", value: "Value 1 means you are temperemental"},
        {label: "value 2", value: "Value 2 means you hate pizzas"},
        {label: "value 3", value: "Value 3 means you love oreos"},
        {label: "value 4", value: "Value 4 means you are a charming one"},
        {label: "value 5", value: "Value 5 means you DID STOLE THOSE COOKIES"},
    ])

    const [display, setDisplay] = useState("");

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
                initial={0}
                onPress={(e) => {
                    // this.setState({value:value})
                    setDisplay(e);
                }}
            />
            {
                display ? (
                    <Text>SHOW THIS: {display}</Text>
                ) : null
            }
        </View>
    );
}
export default Dwayne;
