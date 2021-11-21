import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CopyRight from "./../components/copyright/copyright";
import PostItem from "./../components/post/Post";

const PostScreen = ({ navigation }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://192.168.43.133:4000/api/post/all"
      );
      setState(response.data.posts);
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {state.map((item, index) => (
          <PostItem key={index} data={item} />
        ))}
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
