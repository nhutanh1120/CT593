import React from "react";
import Head from "./../share/head";
import { Text, View } from "react-native";
import Title from "./../share/title";
import Profile from "./../share/profile";

const Distributor = ({ data }) => {
  console.log(data);
  return (
    <View>
      <Head content="Chuỗi phân phối" />
      <Title number="1" title="Thông tin nhà phân phối" />
      {/* <Profile data={data.profile} /> */}
    </View>
  );
};

export default Distributor;
