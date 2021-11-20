import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./../screens/HomeScreen";
import PostScreen from "./../screens/PostScreen";
import ScannerScreen from "./../screens/ScannerScreen";
import ChatScreen from "./../screens/ChatScreen";
import SettingScreen from "./../screens/SettingScreen";
// import QRCodeScreen from "./../screens/QRCodeScreen";
// import SignScreen from "./../screens/SignScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarBottom = ({ children: children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => alert("QR")}>
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
        name="Trang Chủ"
        component={HomeScreen}
        options={{
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
        name="Tin tức"
        component={PostScreen}
        options={{
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
        name="chat"
        component={ChatScreen}
        options={{
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
                  width: 30,
                  textAlign: "center",
                }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cá Nhân"
        component={SettingScreen}
        options={{
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
