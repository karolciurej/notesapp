import { Alert } from "react-native";
import { deleteItem } from "./DeleteItem";

export const DeleteAlert = (key, refresh) => {
  const  handleDelete = async () => {
    await deleteItem(key);
    refresh();
  };
  Alert.alert("Delete", "Are you sure you want to delete this note?", [
    {
      text: "Cancel",
      style: "cancel",
    },
    { text: "OK", onPress: () => handleDelete() },
  ]);
};
