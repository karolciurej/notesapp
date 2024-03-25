import { Text, Pressable } from "react-native";
import { DeleteAlert } from "../utils/DeleteAlert";
import { Dimensions } from "react-native";
import React from "react";

export default function ListItem({
  color,
  data,
  date,
  storeKey,
  title,
  refresh,
}) {
  const month = new Date(date)
    .toLocaleDateString("pl-PL", { month: "short" })
    .toUpperCase();
  const day = new Date(date).toLocaleDateString("pl-PL", { day: "2-digit" });
  return (
    <Pressable
      onLongPress={() => DeleteAlert(storeKey, refresh)}
      style={{
        backgroundColor: color,
        aspectRatio: 1,
        width: Dimensions.get("window").width / 2 - 30,
        margin: 10,
        borderRadius: 10,
        padding: 15,
      }}
    >
      <Text style={{ textAlign: "right" }}>
        {day} {month}
      </Text>
      <Text style={{ fontSize: 28 }}>{title}</Text>
      <Text>{data}</Text>
    </Pressable>
  );
}
