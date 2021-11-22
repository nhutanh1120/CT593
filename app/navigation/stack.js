import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import SettingScreen from "./../screens/SettingScreen";
import SignScreen from "./../screens/SignScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = (props) => {
  useEffect(() => {
    const tabHiddenRoutes = ["Sign"];
    let nameScreen = getFocusedRouteNameFromRoute(props.route);
    if (tabHiddenRoutes.includes(nameScreen)) {
      props.navigation.setOptions({
        tabBarStyle: { display: "none" },
        headerShown: false,
      });
    } else {
      props.navigation.setOptions({
        tabBarStyle: { display: "block" },
        headerShown: true,
      });
    }
  }, [props]);
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Sign" component={SignScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
