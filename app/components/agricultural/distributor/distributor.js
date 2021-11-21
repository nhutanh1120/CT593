import React from "react";
import Head from "./../share/head";
import { Text, View } from "react-native";
import Title from "./../share/title";
import Profile from "./../share/profile";
import Action from "./action";

const Distributor = ({ data }) => {
  return (
    <View>
      <Head content="Chuỗi phân phối" />
      <Title number="1" title="Thông tin nhà phân phối" />
      <Profile data={data.profile} />
      <Title number="2" title="Thông tin chuỗi phân phối" />
      <Action data={data} />
    </View>
  );
};

export default Distributor;
