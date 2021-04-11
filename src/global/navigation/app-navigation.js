import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "../navigation/tab-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./drawer-content";

const Drawer = createDrawerNavigator();

export const AppNavigation = (props) => {
  return (
    <>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={TabNavigation} />
      </Drawer.Navigator>
    </>
  );
};
