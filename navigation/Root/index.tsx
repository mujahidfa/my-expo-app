import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import ContactsScreen from "../../screen/Contacts";
import MyInfoScreen from "../../screen/MyInfo";
import QrCameraScreen from "../../screen/QrCamera";

export type RootTabParamList = {
  Contacts: undefined;
  MyInfo: undefined;
  QrCamera: undefined;
};

const RootTab = createBottomTabNavigator<RootTabParamList>();

const myInfoOptions: BottomTabNavigationOptions = {
  title: "My Info",
};

const qrCameraOptions: BottomTabNavigationOptions = {
  title: "Scan QR Code",
};

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootTab.Navigator initialRouteName="Contacts">
        <RootTab.Screen name="Contacts" component={ContactsScreen} />
        <RootTab.Screen
          name="MyInfo"
          component={MyInfoScreen}
          options={myInfoOptions}
        />
        <RootTab.Screen
          name="QrCamera"
          component={QrCameraScreen}
          options={qrCameraOptions}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  );
}
