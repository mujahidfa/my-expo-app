import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ItemProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export default function ListItem({ name }: ItemProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.item}>
      <Text style={[styles.name, styles.firstName, { color: colors.text }]}>
        {name.firstName}
      </Text>
      <Text> </Text>
      <Text style={[styles.name, { color: colors.text }]}>{name.lastName}</Text>
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
  },
  firstName: {
    fontWeight: "bold",
  },
});
