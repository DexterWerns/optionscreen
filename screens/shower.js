import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Linking,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { RowItem, separator, styles } from "../components/rowitem";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.Text}>You get in the shower. Do you want to:</Text>
      <RowItem
        title="fall"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("fall")}
          />
        }
      />

      <sepatator />

      <RowItem
        title="use shampoo"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("shampoo")}
          />
        }
      />
      <sepatator />
      <RowItem
        title="use soap"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("soap")}
          />
        }
      />
    </SafeAreaView>
  );
};
