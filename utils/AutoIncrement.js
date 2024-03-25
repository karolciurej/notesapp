import * as SecureStore from "expo-secure-store";

export const autoIncrement = async () => {
  let value = await SecureStore.getItemAsync("keys");
  if (value == null) {
    await SecureStore.setItemAsync("keys", JSON.stringify(["0"]));
    return "0";
  } else {
    let numbers = JSON.parse(value);
    numbers.push("" + numbers.length);
    console.log(numbers);
    await SecureStore.setItemAsync("keys", JSON.stringify(numbers));
    return String(numbers.length - 1);
  }
};
