import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Profile from "./../../assets/img/profile.jpg";

const PostItem = (props) => {
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  return (
    <View style={[styles.container, { width: imageWidth - 20 }]}>
      <View style={styles.header}>
        <Image
          source={{ uri: props.data.author?.images || Profile }}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
        <View style={{ paddingLeft: 5 }}>
          <Text
            style={{ fontWeight: "bold" }}
          >{`${props.data.author?.surname} ${props.data.author?.forename}`}</Text>
          <Text style={{ fontSize: 10 }}>Luu tran anh nhut</Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={{ color: "blue", marginTop: 5, marginRight: 5 }}>
          #abcd
        </Text>
        <Text style={{ color: "blue", marginTop: 5 }}>#abcd</Text>
      </View>
      <Text style={{ marginTop: 10 }}>{props.data.description}</Text>
      <Image
        style={{ width: imageWidth - 40, height: 200 }}
        source={{ uri: props.data.attachment || Profile }}
      />
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
  },
});
