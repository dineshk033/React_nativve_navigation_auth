import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../../feature/home";
import { AboutScreen } from "../../feature/about";
import { DrawerContent } from "./drawer-content";
const Drawer = createDrawerNavigator();

export default function DrwerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}
