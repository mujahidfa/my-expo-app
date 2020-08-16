import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import { RootTabParamList } from "../../navigation/Root";
import ListItem from "./../../components/ListItem";
import ListSearchBar from "./../../components/ListSearchBar";
import { DATA } from "./../../data";

type Props = BottomTabScreenProps<RootTabParamList, "Contacts">;

type FlatListRenderItemProps = {
  item: {
    id: string;
    name: {
      firstName: string;
      lastName: string;
    };
  };
};

type NameList = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
}[];

export default function ContactsScreen({ route, navigation }: Props) {
  const { colors } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");
  const [nameList, setNameList] = useState<NameList>(DATA);

  useEffect(() => {
    const newNameList = DATA.filter((item) => {
      const itemData = `${item.name.firstName.toUpperCase()} ${item.name.lastName.toUpperCase()}`;

      const query = searchQuery.toUpperCase();

      return itemData.indexOf(query) > -1;
    });

    setNameList(newNameList);
  }, [searchQuery]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text h3 style={[{ color: colors.text, fontWeight: "700" }]}>
        Contacts
      </Text>
      <FlatList
        data={nameList}
        renderItem={({ item }: FlatListRenderItemProps) => (
          <ListItem name={item.name} />
        )}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <ListSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: "#1a202c",
    paddingHorizontal: 20,
  },
});
