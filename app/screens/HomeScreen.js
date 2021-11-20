import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CopyRight from "./../components/copyright/copyright";

const HomeScreen = ({ navigation }) => {
  const dimensions = Dimensions.get("window");
  const widthScreen = dimensions.width;
  return (
    <View style={styles.container}>
      {/* Header  */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./../assets/img/home/home.jpg")}
          style={{ width: widthScreen, height: 200 }}
        />
        <Pressable style={styles.button}>
          <Text style={styles.text}>Xem Ngay?</Text>
        </Pressable>
      </View>
      {/* About  */}
      <View
        style={{ width: widthScreen, height: 100, backgroundColor: "white" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#333",
          }}
        >
          <View
            style={{
              width: widthScreen / 3,
              borderRightWidth: 1,
              borderLeftColor: "#333",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>Sản xuất</Text>
          </View>
          <View
            style={{
              width: widthScreen / 3,
              borderRightWidth: 1,
              borderLeftColor: "#333",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>Phân phối</Text>
          </View>
          <View
            style={{
              width: widthScreen / 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>Chế biến</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              width: widthScreen / 3,
              borderRightWidth: 1,
              borderLeftColor: "#333",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>Bán lẻ</Text>
          </View>
          <View
            style={{
              width: widthScreen / 3,
              borderRightWidth: 1,
              borderLeftColor: "#333",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>Khách hàng</Text>
          </View>
          <View
            style={{
              width: widthScreen / 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text>Quản trị</Text>
          </View>
        </View>
      </View>
      <CopyRight margin={10} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    flexDirection: "column",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "white",
    width: 100,
    position: "absolute",
  },
  text: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
