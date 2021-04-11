import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen } from "../../feature/account/registerScreen";
import { LoginScreen } from "../../feature/account/login";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
