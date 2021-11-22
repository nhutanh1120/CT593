import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ChatScreen from "./../screens/ChatScreen";
import HomeScreen from "./../screens/HomeScreen";
import PostScreen from "./../screens/PostScreen";
import ScannerScreen from "./../screens/ScannerScreen";
import AuthNavigator from "./stack";
// import QRCodeScreen from "./../screens/QRCodeScreen";
// import SignScreen from "./../screens/SignScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarBottom = ({ children: children, onPress }) => {
  console.log(onPress);
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#e32f45",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export function Tabs({ focus }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
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
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Trang Chủ",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#749c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#749c94",
                  fontSize: 12,
                  width: 65,
                  textAlign: "center",
                }}
              >
                Trang Chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: "Tin tức",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./../assets/icons/news.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#749c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#749c94",
                  fontSize: 12,
                  width: 45,
                  textAlign: "center",
                }}
              >
                Tin Tức
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="scanner"
        component={ScannerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("./../assets/icons/qr-scan.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#e32f45" : "#749c94",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarBottom {...props} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "Tin nhắn",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./../assets/icons/message.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#749c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#749c94",
                  fontSize: 12,
                  width: 50,
                  textAlign: "center",
                }}
              >
                Tin nhắn
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Personal"
        component={AuthNavigator}
        options={{
          title: "Cá Nhân",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("./../assets/icons/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#749c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#749c94",
                  fontSize: 12,
                  width: 50,
                  textAlign: "center",
                }}
              >
                Cá Nhân
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "lightblue", // #7F5DF0
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 0,
  },
  button: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
});
