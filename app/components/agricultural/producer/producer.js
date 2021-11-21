import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Head from "./../share/head";
import Profile from "./../share/profile";
import Title from "./../share/title";
import Action from "./action";
import moment from "moment";

const Producer = ({ data }) => {
  return (
    <View>
      <Head content="Chuỗi sản xuất" />
      <Title number="1" title="Thông tin nhà sản xuất" />
      <Profile data={data.producer} />
      <Title number="2" title="Thông tin về giống" />
      <View style={{ paddingLeft: 25 }}>
        <Text style={{ paddingVertical: 2 }}>
          Loại nông sản:&nbsp;
          {(data.breed.typeAgricultural === 0 && "Cây trồng") || "Vật nuôi"}
        </Text>
        <Text style={{ paddingVertical: 2 }}>
          Tên nông sản: {data.breed.nameBreed}
        </Text>
        <Text style={{ paddingVertical: 2 }}>
          Nhà cung cấp nông sản: {data.breed.supplierBreed}
        </Text>
        <Text style={{ paddingVertical: 2 }}>
          Địa chỉ sản xuất nông sản: {data.breed.addressBreed}
        </Text>
        <Text style={{ paddingVertical: 2 }}>
          Thời gian sản xuất:&nbsp;
          {moment(data.breed.timeBreed).format("DD.MM.YYYY")}
        </Text>
      </View>
      <Title number="3" title="Thông tin về hoạt động" />
      {data?.actions.map((item, index) => (
        <Action key={index} type={data.breed.typeAgricultural} data={item} />
      ))}
      <Title number="4" title="Thông tin thu hoạch" />
      {data.harvest && (
        <View style={{ paddingLeft: 25 }}>
          <Image source={require("./../../../assets/img/profile.jpg")} />
          <Text style={{ paddingVertical: 2 }}>
            Thời gian thu hoach:&nbsp;
            {moment(data.harvest.times).format("DD.MM.YYYY")}(
            {moment(data.harvest.times).fromNow()})
          </Text>
          <Text style={{ paddingVertical: 2 }}>
            Hạn sử dụng: {data.harvest.expiry} ngày
          </Text>
          <Text style={{ paddingVertical: 2 }}>
            Mô tả nông sản: {data.harvest.description || "Không có mô tả"}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Producer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
});
