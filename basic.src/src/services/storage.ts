import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (_) {
    return null;
  }
};

export const setData = async (key: string, value: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (_) {
    return false;
  }
  return true;
};
