import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SetTing!</Text>
      <Button title="Click" onPress={() => alert("nhấn vào button")} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
