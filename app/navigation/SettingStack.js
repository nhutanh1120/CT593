import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { getData } from "../components/handle/store";
import LoginScreen from "../screens/LoginScreen";
import PersonalScreen from "../screens/PersonalScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = (props) => {
  const [state, setState] = useState(null);
  getData().then((res) => {
    if (res) setState(res);
    else setState(null);
  });

  useEffect(() => {
    const tabHiddenRoutes = ["Login", "Register"];
    let nameScreen = getFocusedRouteNameFromRoute(props.route);
    if (tabHiddenRoutes.includes(nameScreen)) {
      props.navigation.setOptions({
        tabBarStyle: { display: "none" },
        headerShown: false,
      });
    } else {
      props.navigation.setOptions({
        headerShown: true,
        tabBarStyle: {
          display: "block",
          position: "absolute",
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 80,
        },
      });
    }
  }, [props]);

  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={(state && PersonalScreen) || SettingScreen}
        options={{ headerShown: false, title: "Cá nhân" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Đăng nhập" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Đăng ký" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
