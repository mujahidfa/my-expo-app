import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import ListItem from "./components/ListItem";
import ListSearchBar from "./components/ListSearchBar";
import { DATA } from "./data";

interface FlatListRenderItemProps {
  item: {
    id: string;
    name: {
      firstName: string;
      lastName: string;
    };
  };
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [nameList, setNameList] = useState(DATA);

  useEffect(() => {
    const newNameList = DATA.filter((item) => {
      const itemData = `${item.name.firstName.toUpperCase()} ${item.name.lastName.toUpperCase()}`;

      const query = searchQuery.toUpperCase();

      return itemData.indexOf(query) > -1;
    });

    setNameList(newNameList);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Text h1>Contacts</Text>
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
      <StatusBar style="inverted" />
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
