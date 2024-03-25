import * as SecureStore from "expo-secure-store";

export const deleteItem = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
    let keys = await SecureStore.getItemAsync("keys");
    console.log(keys);
    let newKeys = JSON.parse(keys).filter((k) => k !== key);
    console.log(newKeys);
    await SecureStore.setItemAsync("keys", JSON.stringify(newKeys));
  } catch (e) {
    console.log(e);
  }
};
