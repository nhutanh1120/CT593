import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              marginRight: "auto",
            }}
          >
            <View
              style={{ position: "relative", paddingLeft: 10, paddingTop: 10 }}
            >
              <Image
                source={require("./../assets/img/profile.jpg")}
                style={styles.image}
              />
              <View
                style={{
                  position: "absolute",
                  left: 60,
                  width: 100,
                  paddingTop: 13,
                }}
              >
                <Text>Xin chào!</Text>
                <Text style={{ fontSize: 10 }}>14:05</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.formControl}
                placeholder="Nhập tin nhắn"
              />
              <Text style={styles.textControl}>Gửi</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MessageScreen;

const dimensions = Dimensions.get("window");
const widthScreen = dimensions.width;
const heightScreen = dimensions.height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    height: heightScreen - 65,
  },
  footer: {
    width: widthScreen,
    minHeight: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  formGroup: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  formControl: {
    width: widthScreen - 50,
    paddingLeft: 5,
  },
  textControl: {
    width: 30,
  },
  image: { width: 40, height: 40, borderRadius: 50 },
});
