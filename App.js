import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./components/CustomDrawerContent";
import Add from "./components/Add";
import Notes from "./components/Notes";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Notes"
            component={Notes}
            options={{
              title: "Notatki",
              headerStyle: {
                backgroundColor: "cornflowerblue",
              },
            }}
          />

          <Drawer.Screen
            name="Add"
            component={Add}
            options={{
              title: "Dodaj notatkę",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
