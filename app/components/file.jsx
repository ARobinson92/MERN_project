import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function File() {
  return (
    <View>
      <Text style={styles.component}>
        Or we can put in components, and give it it's own overriding stylesheet.
      </Text>
      <Button
        style={styles.buttons}
        title="We can add buttons, too!"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textDecorationStyle: "solid",
    padding: 45,
  },
  buttons: {
    padding: 15,
    backgroundColor: "lightblue",
    borderColor: "white",
  },
});
