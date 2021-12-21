import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import ScannerScreen from "../screens/ScannerScreen";
import QRCodeScreen from "../screens/QRCodeScreen";
import AgriculturalScreen from "../screens/AgriculturalScreen";

const Stack = createNativeStackNavigator();

const ScannerNavigator = (props) => {
  useEffect(() => {
    const tabHiddenRoutes = ["QRCode", "Agricultural"];
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
    <Stack.Navigator initialRouteName="Scanner">
      <Stack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ headerShown: false, title: "Quét mã QR" }}
      />
      <Stack.Screen
        name="QRCode"
        component={QRCodeScreen}
        options={{ title: "Quét mã QR" }}
      />
      <Stack.Screen
        name="Agricultural"
        component={AgriculturalScreen}
        options={{ title: "Truy suất sản phẩm" }}
      />
    </Stack.Navigator>
  );
};

export default ScannerNavigator;
