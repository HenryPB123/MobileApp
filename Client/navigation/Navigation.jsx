import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Stack from "./Stack";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default Navigation;
