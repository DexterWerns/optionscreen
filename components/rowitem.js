import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
export const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    color: "#12c9a2",
    // background: linear - gradient("#e66465", "#9198e5"),
    paddingHorizontal: 20,
    margin: 20,
  },
  separator: {
    backgroundColor: "#101010",
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  tinyLogo: {
    width: 400,
    height: 400,
  },
});

export const sepatator = () => {
  return <View style={styles.separator} />;
};

export const RowItem = ({ title, icon, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.Text}>{title}</Text>
        {icon}
      </View>
    </TouchableHighlight>
  );
};
