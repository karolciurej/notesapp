import * as SecureStore from "expo-secure-store";
import { autoIncrement } from "./AutoIncrement";

export const saveItem = async (value) => {
  if (value.title == "" || value.data == "") {
    alert("Brak tytułu i/lub treści");
    return;
  }
  try {
    const key = await autoIncrement();
    const items = JSON.stringify({ ...value, key: key });
    await SecureStore.setItemAsync(key, items);
    value.navigation.navigate("Notes");
  } catch (err) {
    console.log(err);
  }
};
