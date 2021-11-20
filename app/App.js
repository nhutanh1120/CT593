import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./navigation/tabs";
// import SignScreen from "./screens/SignScreen";
// import QRCodeScreen from "./screens/QRCodeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
  // return (
  //   <View style={styles.container}>
  //     <QRCodeScreen />
  //     <SignScreen />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
