import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Action = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 5 }}>
        <View style={styles.tr}>
          <Text style={[styles.index, styles.borderRight]}>#</Text>
          <Text style={[styles.second, styles.borderRight]}>Tên phụ liệu</Text>
          <Text style={styles.th}>Nhà cung cấp</Text>
        </View>
        {data.map((item, index) => (
          <View style={styles.tr} key={index}>
            <Text style={[styles.index, styles.borderRight]}>{index + 1}</Text>
            <Text style={[styles.second, styles.borderRight]}>{item.name}</Text>
            <Text style={styles.td}>{item.supplier}</Text>
          </View>
        ))}
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
  second: {
    padding: 5,
    width: 130,
    textAlign: "center",
  },
  index: {
    padding: 5,
    width: 30,
    textAlign: "center",
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: "#333",
  },
});
