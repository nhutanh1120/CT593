import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Action = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 5 }}>
        <View style={styles.tr}>
          <Text style={[styles.th, styles.borderRight]}>Địa chỉ bắt đầu</Text>
          <Text style={styles.th}>Địa chỉ đến</Text>
        </View>
        <View style={styles.tr}>
          <Text style={[styles.td, styles.borderRight]}>{data.start}</Text>
          <Text style={styles.td}>{data.end}</Text>
        </View>
      </View>
    </View>
  );
};

export default Action;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
  },
  tr: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#333",
    width: 320,
  },
  th: {
    padding: 5,
    width: 160,
    textAlign: "center",
    fontWeight: "600",
  },
  td: {
    padding: 5,
    width: 160,
    textAlign: "center",
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: "#333",
  },
});
