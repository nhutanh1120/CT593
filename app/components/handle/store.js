import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_login");
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
export const getProfile = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_profile");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const storeData = async (value) => {
  await AsyncStorage.setItem("@storage_login", value);
};
export const storeProfile = async (value) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem("@storage_profile", jsonValue);
};

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
