import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

const ScannerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              fontWeight: "bold",
              marginBottom: 3,
            }}
          >
            Luu moments
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              textDecorationLine: "underline",
              marginBottom: 3,
            }}
          >
            Chọn mã QR
          </Text>
          <Text style={{ textAlign: "center", fontSize: 10 }}>
            Quét mã QR để truy suất sản phẩm của bạn
          </Text>
        </View>
        <View style={styles.content}>
          <Image
            source={require("./../assets/icons/qr-scan.png")}
            style={{ width: 220, height: 220 }}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 12, marginBottom: 5 }}>
          Vui lòng cho phép truy cập camera trước khi quét!
        </Text>
        <Button
          title="Quét mã ngay"
          onPress={() => navigation.navigate("QRCode")}
        />
      </View>
    </View>
  );
};

export default ScannerScreen;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 6,
    alignItems: "center",
    position: "relative",
    padding: 10,
    width: width,
  },
  title: {
    width: width - 20,
    height: 100,
    paddingTop: 10,
    backgroundColor: "#b3b3b3",
    borderRadius: 10,
  },
  content: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 80,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  footer: {
    flex: 4,
  },
});
