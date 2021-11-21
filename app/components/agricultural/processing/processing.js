import React from "react";
import Head from "./../share/head";
import { Text, View, Image } from "react-native";
import Title from "./../share/title";
import Profile from "./../share/profile";
import Action from "./action";
import profile from "./../../../assets/img/profile.jpg";
import moment from "moment";

const Processing = ({ data }) => {
  return (
    <View>
      <Head content="Chuỗi chế biến" />
      <Title number="1" title="Thông tin nhà chế biến" />
      <Profile data={data.profile} />
      <Title number="2" title="Thông tin về sản phẩm được chế biến" />
      <View>
        <Image
          source={{ uri: data.images || profile }}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
        <Text>Tên sản phẩm: {data.nameProduct}</Text>
        <Text>
          Ngày sản xuất: {moment(data.dateManufacture).format("DD.MM.YYYY")}(
          {moment(data.dateManufacture).fromNow()})
        </Text>
        <Text>Hạn sử dụng (kể từ ngày sản xuất): {data.expiry}</Text>
      </View>
      <Title number="3" title="Thông tin về các phụ liệu được thêm vào" />
      <Action data={data.ingredients} />
    </View>
  );
};

export default Processing;
