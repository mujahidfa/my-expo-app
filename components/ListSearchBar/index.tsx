import React from "react";
import { Platform, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

interface ListSearchBarProps {
  searchQuery: string;
  setSearchQuery(query: string): any;
}

const ListSearchBar = ({ searchQuery, setSearchQuery }: ListSearchBarProps) => {
  return (
    <SearchBar
      placeholder="Search"
      placeholderTextColor="#a0aec0"
      platform={Platform.OS === "ios" ? "ios" : "android"}
      containerStyle={styles.textContainer}
      inputContainerStyle={styles.textInputContainer}
      inputStyle={styles.textInput}
      searchIcon={{
        name: "search",
        type: "material",
        color: "#a0aec0",
      }}
      clearIcon={
        Platform.OS === "android" || Platform.OS === "web"
          ? {
              name: "clear",
              type: "material",
              color: "#a0aec0",
            }
          : undefined
      }
      cancelIcon={{
        name: "arrow-back",
        type: "material",
        color: "#a0aec0",
      }}
      onChangeText={(query) => setSearchQuery(query)}
      onCancel={() => setSearchQuery("")}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#1a202c",
  },
  textInputContainer: {
    marginLeft: 0,
    backgroundColor: "#2d3748",
    borderRadius: 8,
  },
  textInput: {
    color: "white",
    fontSize: 20,
  },
});

export default ListSearchBar;
