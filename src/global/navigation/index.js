import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigation } from "./app-navigation";
import { AccountNavigator } from "./account-navigation";
import { AuthenticationContext } from "../context/Authentication";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
