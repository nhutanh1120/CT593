import React from "react";
import Head from "./../share/head";
import { Text, View } from "react-native";
import Title from "./../share/title";
import Profile from "./../share/profile";

const Processing = ({ data }) => {
  console.log(data);
  return (
    <View>
      <Head content="Chuỗi chế biến" />
      <Title number="1" title="Thông tin nhà chế biến" />
      {/* <Profile data={data.profile} /> */}
    </View>
  );
};

export default Processing;
