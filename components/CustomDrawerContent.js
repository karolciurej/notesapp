import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, View } from "react-native";

export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#ddd" }}>
      <View
        style={{
          height: 80,
          alignItems: "center",
          margin: 40,
        }}
      >
        <Image
          style={{ flex: 1, height: 80, width: 80 }}
          source={require("../assets/notes.png")}
        />
      </View>
      <DrawerItem
        label="Notes"
        icon={() => (
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/pencil.png")}
          />
        )}
        onPress={() => props.navigation.navigate("Notes")}
      />
      <DrawerItem
        label="Add"
        icon={() => (
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/plus.png")}
          />
        )}
        onPress={() => props.navigation.navigate("Add")}
      />
      <DrawerItem
        label="Info"
        icon={() => (
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/info.png")}
          />
        )}
        onPress={() => alert("Notes App v1.0")}
      />
    </DrawerContentScrollView>
  );
}
