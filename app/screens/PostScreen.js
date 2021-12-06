import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
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
        {state.length === 0 && (
          <View style={styles.empty}>
            <Text>Không có dử liệu</Text>
          </View>
        )}
        <CopyRight margin={0} />
      </ScrollView>
    </View>
  );
};

export default PostScreen;

const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  empty: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width - 20,
    paddingVertical: 40,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
