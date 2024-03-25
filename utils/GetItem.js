import * as SecureStore from "expo-secure-store";

export const getAllItems = async () => {
  let items = [];
  let keys = await SecureStore.getItemAsync("keys");
  console.log(keys);
  if (keys == null) return items;
  for (const key of JSON.parse(keys)) {
    try {
      let item = await SecureStore.getItemAsync(key);
      items.push(JSON.parse(item));
    } catch (e) {
      console.log(e);
    }
  }
  return items;
};
