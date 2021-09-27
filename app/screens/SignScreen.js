import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";

export default function SignScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require("./../assets/favicon.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text>Header</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
        <Text>Footer</Text>
        <View>
          <TouchableOpacity onPress={() => alert("abcd")}>
            {/* <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            > */}
            <Text>Get started</Text>
            {/* </LinearGradient> */}
          </TouchableOpacity>
        </View>

        <Button></Button>
      </View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  text: {
    color: "gray",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#fff",
    fontSize: "bold",
  },
});
