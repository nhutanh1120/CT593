import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import ChatScreen from "./../screens/ChatScreen";
import MessageScreen from "./../screens/MessageScreen";

const Stack = createNativeStackNavigator();

const ChatNavigator = (props) => {
  useEffect(() => {
    const tabHiddenRoutes = ["MessageScreen"];
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
    <Stack.Navigator initialRouteName="ChatScreen">
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{ title: "Tin nhắn" }}
      />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
