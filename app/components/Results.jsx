import React, { useState, useEffect } from "react";
import { Alert, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function Results(props) {
    const { navigation, globalstate } = props;
    const [valuesList, setValuesList] = globalstate;
    return (
        
        <View style={styles.results}>
            <View>
                <Text style={styles.header}>Results</Text>
            </View>
            <View style ={styles.results}> {valuesList}</View>
        </View>
    );
}

export default Results;

const styles = StyleSheet.create({
    results: {

    },
});