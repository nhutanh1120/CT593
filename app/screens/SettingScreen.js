import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const SettingScreen = ({ navigation }) => {
  let date = Date.now();
  const [state, setState] = useState(date);
  useEffect(() => {
    const dateTime = setInterval(() => {
      setState(Date.now());
    }, 6000);
    return () => clearInterval(dateTime);
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("./../assets/icons/lock.png")}
              style={styles.imageSmall}
            />
            <Text style={{ fontSize: 56 }}>
              {moment(state).format("hh:mm")}
            </Text>
            <Text style={{ textAlign: "center" }}>
              {moment(state).format("dd, DD")}
              &nbsp;tháng&nbsp;
              {moment(state).format("MM")}
            </Text>
            <Image
              source={require("./../assets/icons/users.png")}
              style={styles.imageBig}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Pressable
            style={[styles.button, { backgroundColor: "#005792" }]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text}>Đăng nhập</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "#b3b3b3" }]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.text}>Đăng ký</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SettingScreen;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    paddingBottom: 120,
  },
  header: {
    flex: 1,
    padding: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: width - 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  imageBig: {
    width: 150,
    height: 150,
    marginTop: 40,
  },
  imageSmall: {
    width: 20,
    height: 20,
  },
});
