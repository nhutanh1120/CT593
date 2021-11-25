import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CopyRight = ({ margin }) => {
  return (
    <View style={[styles.container, { marginHorizontal: margin }]}>
      <Text>
        Bản quyền thiết kế{" "}
        <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          lưu trần anh nhựt
        </Text>
      </Text>
    </View>
  );
};

export default CopyRight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
});
