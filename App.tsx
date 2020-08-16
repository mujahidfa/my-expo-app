import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { enableScreens } from "react-native-screens";

import RootNavigation from "./navigation/Root";

enableScreens();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <AppearanceProvider>
      <RootNavigation />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </AppearanceProvider>
  );
}
