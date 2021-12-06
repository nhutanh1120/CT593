import React from "react";
import Head from "./../share/head";
import { Text, View } from "react-native";
import Title from "./../share/title";
import Profile from "./../share/profile";

const Retailer = ({ data }) => {
  const DataBody = () => (
    <>
      <Title number="1" title="Thông tin nhà bán lẻ" />
      <Profile data={data.profile} />
      <Title number="2" title="Thông tin cửa hàng" />
      <View style={{ paddingLeft: 25 }}>
        <Text style={{ marginBottom: 3 }}>Tên cửa hàng: {data.nameStore}</Text>
        <Text style={{ marginBottom: 3 }}>
          Địa chỉ cửa hàng: {data.addressRetail}
        </Text>
        <Text>Giá sản phẩm: {data.price}</Text>
      </View>
    </>
  );

  return (
    <View>
      <Head content="Đại lý bán lẻ" />
      {data?.profile && <DataBody />}
    </View>
  );
};

export default Retailer;
