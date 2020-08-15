import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import { RootTabParamList } from "../../navigation/Root";

type Props = BottomTabScreenProps<RootTabParamList, "MyInfo">;

export default function MyInfoScreen({ route, navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text h1>My Info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1a202c",
    paddingHorizontal: 20,
  },
});
