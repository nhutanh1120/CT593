import React from "react";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";

const SlideShowItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        // style={[styles.image, { width, resizeMode: ImageResizeMode.contain }]}
        style={[styles.image]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideShowItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    flex: 0.7,
    // justifyContent: "center",
    width: 200,
    height: 400,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
    textTransform: "capitalize",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
