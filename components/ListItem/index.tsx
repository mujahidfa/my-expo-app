import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ItemProps {
  name: {
    firstName: string;
    lastName: string;
  };
}

export default function ListItem({ name }: ItemProps) {
  return (
    <View style={styles.item}>
      <Text style={[styles.name, styles.firstName]}>{name.firstName}</Text>
      <Text> </Text>
      <Text style={styles.name}>{name.lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  name: {
    fontSize: 18,
    color: "white",
  },
  firstName: {
    fontWeight: "bold",
  },
});
