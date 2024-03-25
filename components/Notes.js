import { FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import ListItem from "./ListItem";
import { getAllItems } from "../utils/GetItem";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

export default function Notes() {
  const [items, setItems] = useState([1]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchItems = async () => {
      // SecureStore.deleteItemAsync("2");
      // SecureStore.deleteItemAsync("keys");
      const itemsFromStore = await getAllItems();
      // console.log(itemsFromStore);
      setItems(itemsFromStore);
    };

    fetchItems();
  }, [isFocused]);

  const refresh = async () => {
    const itemsFromStore = await getAllItems();
    setItems(itemsFromStore);
  };

  return (
    <FlatList
      style={{ flex: 1, padding: 10, backgroundColor: "#eee" }}
      numColumns="2"
      data={items}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <ListItem
          color={item.color}
          data={item.data}
          date={item.date}
          storeKey={item.key}
          title={item.title}
          refresh={refresh}
        />
      )}
    />
  );
}
