import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import MyButton from "./MyButton";
import { saveItem } from "../utils/SaveItem";

export default function Add({ navigation }) {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");

  const getRandomColor = () => {
    const randomComponent = () =>
      Math.floor(Math.random() * (256 - 170) + 120)
        .toString(16)
        .padStart(2, "0");

    const color = `#${randomComponent()}${randomComponent()}${randomComponent()}`;

    return color;
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#eee" }}>
      <TextInput
        placeholder="Tytuł"
        style={{
          height: 50,
          padding: 5,
          margin: 10,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Treść"
        style={{
          height: 50,
          padding: 5,
          margin: 10,
          marginBottom: 45,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
        onChangeText={(text) => setData(text)}
      />
      <MyButton
        text="DODAJ"
        color={"black"}
        onPress={() =>
          saveItem({
            title: title,
            data: data,
            color: getRandomColor(),
            date: new Date(),
            navigation: navigation,
          })
        }
      />
    </View>
  );
}
