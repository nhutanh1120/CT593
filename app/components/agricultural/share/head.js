import React from "react";
import { Text } from "react-native";

const Head = ({ content }) => {
  return (
    <Text
      style={{
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#30373b",
      }}
    >
      {content}
    </Text>
  );
};

export default Head;
