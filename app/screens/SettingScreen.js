import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import SlideShowItem from "./../components/SlideShow";
import slideshowData from "./../assets/Json/personal";

const SettingScreen = ({ navigation }) => {
  const onPress = () => {};
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ backgroundColor: "red", flex: 1 }}>
            <Text>Slide show</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Pressable
            style={[styles.button, { backgroundColor: "#5f0a87" }]}
            onPress={() => navigation.navigate("Sign")}
          >
            <Text style={styles.text}>Đăng nhập</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "#b3b3b3" }]}
            onPress={onPress}
          >
            <Text style={styles.text}>Đăng ký</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SettingScreen;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    paddingBottom: 30,
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
});
