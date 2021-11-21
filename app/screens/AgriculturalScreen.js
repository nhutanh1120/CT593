import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View, Text } from "react-native";
import Distributor from "./../components/agricultural/distributor/distributor";
import Producer from "./../components/agricultural/producer/producer";
import Processing from "./../components/agricultural/processing/processing";
import Retailer from "./../components/agricultural/retailer/retailer";
import CopyRight from "./../components/copyright/copyright";
import Head from "./../components/agricultural/share/head";

const AgriculturalScreen = ({ id = "618d5a9b32dc6763ada3ceae" }) => {
  const dimensions = Dimensions.get("window");
  const widthScreen = dimensions.width;
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/agricultural/read/" + id
      );
      setState(response?.data?.agricultural);
    };
    fetchData();
  }, []);

  return (
    <View style={[styles.container, { width: widthScreen }]}>
      <ScrollView>
        <View>
          <Text
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Truy suất nguồn gốc sản phẩm
          </Text>
          <Text style={{ textAlign: "center" }}>
            Thông tin được công bố rõ ràng, công khai và nhất quán với hệ thống
            phần mềm. Tuyệt đối không có dử liệu ảo, chi phí phát sinh.
          </Text>
        </View>
        {state.length !== 0 && <Producer data={state} />}
        {state?.distributor?.map((item, index) => (
          <Distributor key={index} data={item} />
        )) || <Head content="Chuỗi phân phối" />}
        {state?.processing?.map((item, index) => (
          <Processing key={index} data={item} />
        )) || <Head content="Chuỗi chế biến" />}
        <Retailer data={state.retailer} />
        <CopyRight margin={0} />
      </ScrollView>
    </View>
  );
};

export default AgriculturalScreen;

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
