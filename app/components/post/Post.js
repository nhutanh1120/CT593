import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import profile from "./../../assets/img/profile.jpg";
import moment from "moment";

const PostItem = (props) => {
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  return (
    <View style={[styles.container, { width: imageWidth - 20 }]}>
      <View style={styles.header}>
        <Image
          source={{ uri: props.data.author?.images || profile }}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
        <View style={{ paddingLeft: 5 }}>
          <Text
            style={{ fontWeight: "bold" }}
          >{`${props.data.author?.surname} ${props.data.author?.forename}`}</Text>
          <Text style={{ fontSize: 10 }}>
            {moment(props.data.createdAt).fromNow()}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {props.data.tags.map((item, index) => (
          <Text style={styles.tag} key={index}>
            {item}
          </Text>
        ))}
      </View>
      <Text style={{ marginTop: 10 }}>{props.data.description}</Text>
      <Image
        style={{ width: imageWidth - 40, height: 200 }}
        source={{ uri: props.data.attachment || profile }}
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
  tag: {
    color: "blue",
    marginTop: 5,
    marginRight: 5,
  },
});
