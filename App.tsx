import { StatusBar } from "expo-status-bar";
import React from "react";
import { enableScreens } from "react-native-screens";

import RootNavigation from "./navigation/Root";

enableScreens();

export default function App() {
  return (
    <>
      <RootNavigation />
      <StatusBar style="inverted" />
    </>
  );
}
