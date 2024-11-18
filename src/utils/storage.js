import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  getOne: async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },

  clear: async () => {
    try {
      return await AsyncStorage.clear();
    } catch (error) {
      return null;
    }
  },
};
