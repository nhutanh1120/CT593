import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CopyRight from "./../components/copyright/copyright";
import PostItem from "./../components/post/Post";

const PostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostItem />
        <PostItem />
        <PostItem />
        <CopyRight margin={0} />
      </ScrollView>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 100,
  },
});
