import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = ({ number, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{number}</Text>
      <Text
        style={{
          paddingLeft: 5,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "red",
    textAlign: "center",
    textAlignVertical: "center",
    width: 25,
    padding: 3,
  },
});
