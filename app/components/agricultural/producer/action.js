import React from "react";
import moment from "moment";
import { View, Text, StyleSheet } from "react-native";

const typeAction = (typeBreed, typeAction) => {
  let string;
  if (typeBreed === 0) {
    string = typeAction === 0 ? "Phun thuốc" : "Bón phân";
  } else {
    string = typeAction === 0 ? "Thuốc phòng bệnh" : "Thức ăn";
  }
  return string;
};

const Action = ({ type, data }) => {
  return (
    <View style={styles.container}>
      <Text style={{ lineHeight: 20 }}>
        Loại hoạt động: {typeAction(type, data.typeAction)}
      </Text>
      <Text style={{ lineHeight: 20 }}>
        Thời gian diễn ra hoạt động:{" "}
        {moment(data.timeAction).format("DD.MM.YYYY")}
      </Text>
      <View style={{ marginVertical: 5 }}>
        <View style={styles.tr}>
          <Text style={[styles.th, styles.borderRight]}>Tên hoạt động</Text>
          <Text style={styles.th}>Nhà cung cấp</Text>
        </View>
        {data?.listAction.map((item, index) => (
          <View style={styles.tr} key={index}>
            <Text style={[styles.td, styles.borderRight]}>
              {item.nameAction}
            </Text>
            <Text style={styles.td}>{item.supplierAction}</Text>
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
  borderRight: {
    borderRightWidth: 1,
    borderColor: "#333",
  },
});
