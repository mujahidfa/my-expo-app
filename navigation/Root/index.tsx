import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import React from "react";
import { Platform } from "react-native";
import { useColorScheme } from "react-native-appearance";

import ContactsScreen from "../../screen/Contacts";
import MyInfoScreen from "../../screen/MyInfo";
import QrCameraScreen from "../../screen/QrCamera";

export type RootTabParamList = {
  Contacts: undefined;
  MyInfo: undefined;
  QrCamera: undefined;
};

const RootTab = createBottomTabNavigator<RootTabParamList>();

const contactOptions: BottomTabNavigationOptions = {
  title: "Contacts",
  tabBarIcon: ({ color, size }) => {
    if (Platform.OS === "ios") {
      return <Ionicons name="ios-contacts" size={size + 6} color={color} />;
    } else {
      return <Ionicons name="md-contacts" size={size} color={color} />;
    }
  },
};

const myInfoOptions: BottomTabNavigationOptions = {
  title: "My Info",
  tabBarIcon: ({ color, size }) => {
    if (Platform.OS === "ios") {
      return <Ionicons name="ios-contact" size={size + 6} color={color} />;
    } else {
      return <Ionicons name="md-contact" size={size} color={color} />;
    }
  },
};

const qrCameraOptions: BottomTabNavigationOptions = {
  title: "Scan QR Code",
  tabBarIcon: ({ color, size }) => {
    if (Platform.OS === "ios") {
      return <Ionicons name="ios-qr-scanner" size={size + 6} color={color} />;
    } else {
      return <Ionicons name="ios-qr-scanner" size={size} color={color} />;
    }
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    input: "rgb(28, 28, 30)",
    inputText: "rgb(142, 142, 147)",
  },
};

export default function RootNavigation() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? CustomDarkTheme : DefaultTheme}
    >
      <RootTab.Navigator
        initialRouteName="Contacts"
        tabBarOptions={{
          labelStyle: {
            fontSize: Platform.OS === "ios" ? 11 : 14,
            fontWeight: Platform.OS === "ios" ? "500" : "700",
          },
          activeTintColor:
            Platform.OS === "android" ? "rgb(120, 163, 246)" : undefined,
          style: {
            height: Platform.OS === "android" ? 65 : 85,
            paddingBottom: Platform.OS === "android" ? 10 : 35,
            paddingTop: Platform.OS === "android" ? 5 : 5,
          },
        }}
      >
        <RootTab.Screen
          name="Contacts"
          component={ContactsScreen}
          options={contactOptions}
        />
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
