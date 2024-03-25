import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MyButton({
  bgColor,
  color,
  text,
  testProps2,
  onPress,
  padding,
  fontSize,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        padding: padding,
        borderRadius: 5,
        alignSelf: "center",
        color: "white",
      }}
      onPress={onPress}
    >
      <Text style={{ color: color, fontSize: fontSize ? fontSize : 20 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
