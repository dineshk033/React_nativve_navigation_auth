import React from "react";
import { Text } from "react-native";

import { SafeArea } from "../shared/safe-area.component";
export const AboutScreen = () => {
  return (
    <SafeArea
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>About us!!!</Text>
    </SafeArea>
  );
};
