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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfile } from "./../components/handle/store";
import avatar from "./../assets/img/profile.jpg";

const PersonalScreen = ({ navigation }) => {
  let date = Date.now();
  const [state, setState] = useState(date);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getProfile().then((res) => setProfile(res));
  }, []);
  useEffect(() => {
    const dateTime = setInterval(() => {
      setState(Date.now());
    }, 6000);
    return () => clearInterval(dateTime);
  }, []);
  const handleLogout = async () => {
    try {
      const a = await axios.delete(
        "http://localhost:4000/api/auth/mobile/logout"
      );
      await AsyncStorage.removeItem("@storage_login");
      await AsyncStorage.removeItem("@storage_profile");
      navigation.replace("Setting");
    } catch (error) {
      navigation.replace("Setting");
    }
  };
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
              source={{ uri: profile?.avatar || avatar }}
              style={styles.imageBig}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Pressable
            style={[styles.button, { backgroundColor: "#b3b3b3" }]}
            onPress={handleLogout}
          >
            <Text style={styles.text}>Đăng xuat</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default PersonalScreen;

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
    borderRadius: 50,
  },
  imageSmall: {
    width: 20,
    height: 20,
  },
});
