import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { storeData, storeProfile } from "./../components/handle/store";

const initialState = {
  username: "",
  password: "",
};
const errorState = {
  usernameError: "",
  passwordError: "",
};
export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(errorState);
  const handlePress = async () => {
    let ok = true;
    let message = {
      passwordError: "",
      usernameError: "",
    };
    if (state.username === "") {
      ok = false;
      message = {
        ...message,
        usernameError: "Vui lòng nhập tài khoản",
      };
    }
    if (state.password === "") {
      ok = false;
      message = {
        ...message,
        passwordError: "Vui lòng nhập mật khẩu",
      };
    }
    if (ok === false) {
      setError(message);
    } else {
      const response = await axios.post(
        "http://localhost:4000/api/auth/mobile/login",
        state
      );
      if (response) {
        storeProfile(response.data.user);
        storeData(response.data.refresh_token);
        navigation.navigate("Setting");
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("./../assets/icons/heart.png")}
        />
        <Text style={styles.title}>Luu Moments</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.formControl}
            value={state.username}
            placeholder="Tài khoản"
            onChangeText={(username) => {
              setState({ ...state, username });
              setError({ ...error, usernameError: "" });
            }}
          />
          <Text style={styles.message}>{error.usernameError}</Text>
        </View>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.formControl}
            value={state.password}
            placeholder="Mật khẩu"
            onChangeText={(password) => {
              setState({ ...state, password });
              setError({ ...error, passwordError: "" });
            }}
            secureTextEntry="true"
          />
          <Text style={styles.message}>{error.passwordError}</Text>
        </View>
        <View>
          <Button
            style={styles.submit}
            title="Đăng nhập"
            onPress={handlePress}
          />
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#009387",
  },
  header: {
    flex: 3,
    flexDirection: "column",
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  footer: {
    flex: 7,
    flexDirection: "column",
    width: width,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderRadius: 30,
    // marginHorizontal: 10,
    // marginBottom: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  formGroup: {
    marginBottom: 10,
  },
  formControl: {
    height: 40,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
  },
  message: {
    marginTop: 5,
    fontSize: 12,
    color: "red",
    paddingLeft: 20,
  },
  submit: {
    width: 100,
    height: 50,
    borderRadius: 10,
  },
});
