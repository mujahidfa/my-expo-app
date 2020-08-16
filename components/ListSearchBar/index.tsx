import { useTheme } from "@react-navigation/native";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

import { CustomDarkTheme } from "./../../navigation/Root";

type ListSearchBarProps = {
  searchQuery: string;
  setSearchQuery(query: string): any;
};

type CustomDarkThemeType = {
  theme: typeof CustomDarkTheme;
};

export default function ListSearchBar({
  searchQuery,
  setSearchQuery,
}: ListSearchBarProps) {
  const { colors } = useTheme();

  return (
    <SearchBar
      placeholder="Search"
      placeholderTextColor={colors.inputText}
      platform={Platform.OS === "ios" ? "ios" : "android"}
      containerStyle={[
        styles.textContainer,
        { backgroundColor: colors.background },
      ]}
      inputContainerStyle={[
        styles.textInputContainer,
        { backgroundColor: colors.input },
      ]}
      inputStyle={[styles.textInput, { color: colors.text }]}
      searchIcon={{
        name: "search",
        type: "material",
        color: colors.inputText,
      }}
      clearIcon={
        Platform.OS === "android" || Platform.OS === "web"
          ? {
              name: "clear",
              type: "material",
              color: colors.inputText,
            }
          : undefined
      }
      cancelIcon={{
        name: "arrow-back",
        type: "material",
        color: colors.inputText,
      }}
      onChangeText={(query) => setSearchQuery(query)}
      onCancel={() => setSearchQuery("")}
      value={searchQuery}
    />
  );
}

const styles = StyleSheet.create({
  textContainer: {
    // backgroundColor: "#1a202c",
  },
  textInputContainer: {
    marginLeft: 0,
    marginRight: 0,
    // backgroundColor: "#2d3748",
    borderRadius: 8,
  },
  textInput: {
    fontSize: 20,
  },
});
