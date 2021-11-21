import React from "react";
import { View, Text } from "react-native";

const Profile = ({ data }) => {
  return (
    <View style={{ paddingLeft: 25 }}>
      <Text style={{ paddingVertical: 2 }}>
        Họ và tên: {data?.name || "Chưa cập nhật"}
      </Text>
      <Text style={{ paddingVertical: 2 }}>
        Số điện thoại liên hệ: {data?.phone}
      </Text>
      <Text style={{ paddingVertical: 2 }}>Email liên hệ: {data?.email}</Text>
      <Text style={{ paddingVertical: 2 }}>
        Địa chỉ liên hệ: {data?.address}
      </Text>
    </View>
  );
};

export default Profile;
