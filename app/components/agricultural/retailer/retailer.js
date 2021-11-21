import React from "react";
import Head from "./../share/head";
import { Text, View } from "react-native";
import Title from "./../share/title";
import Profile from "./../share/profile";

const Retailer = ({ data }) => {
  console.log("retailer", data);
  return (
    <View>
      <Head content="Nhà bán lẻ" />
      {data?.profile && <Title number="1" title="Thông tin nhà bán lẻ" />}
      {data?.profile && <Profile data={data.profile} />}
    </View>
  );
};

export default Retailer;
