import React, { useState, useRef } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";
import SlideShowItem from "./../components/SlideShow";
import slideshowData from "./../assets/Json/personal";

const SettingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);

  // const viewSlideShowChanged = useRef(({ viewableItems }) => {
  //   setCurrentIndex(viewableItems[0].index);
  // }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slideshowData}
          renderItem={({ item }) => <SlideShowItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          // onViewableItemsChanged={viewSlideShowChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.login}>
          <Button
            style={styles.button}
            title="Đăng nhập"
            onPress={() => alert("Nhan vao button")}
          />
        </View>
        <View>
          <Button
            style={styles.button}
            title="Đăng ký"
            onPress={() => alert("nhấn vào button")}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
  login: {
    marginStart: 10,
    marginVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logout: {
    marginTop: 10,
    marginLeft: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    width: 200,
    shadowColor: "#fff",
    shadowRadius: 10,
  },
});
