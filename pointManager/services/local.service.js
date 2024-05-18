import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_INFOR = "USER_INFOR";

export const userInforLocal = {
  set: async (userData) => {
    try {
      const json = JSON.stringify(userData);
      await AsyncStorage.setItem(USER_INFOR, json);
    } catch (e) {
      console.error("Failed to save user info to AsyncStorage", e);
    }
  },
  get: async () => {
    try {
      const json = await AsyncStorage.getItem(USER_INFOR);
      return json ? JSON.parse(json) : null;
    } catch (e) {
      console.error("Failed to load user info from AsyncStorage", e);
      return null;
    }
  },
  remove: async () => {
    try {
      await AsyncStorage.removeItem(USER_INFOR);
    } catch (e) {
      console.error("Failed to remove user info from AsyncStorage", e);
    }
  },
};
