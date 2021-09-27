// import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import QRCodeScreen from "./screens/QRCodeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./navigation/tabs";
import SignScreen from "./screens/SignScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      {/* <QRCodeScreen /> */}
      <SignScreen />
    </NavigationContainer>
  );
}
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
