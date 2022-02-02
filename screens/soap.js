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
      <Text style={styles.Text}>
        You drop the soap becuase its slippery. do you want to{" "}
      </Text>
      <RowItem
        title="pickitup"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("Pick it up")}
          />
        }
      />

      <sepatator />

      <RowItem
        title="getout"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            color="blue"
            onPress={() => navigation.push("Get out")}
          />
        }
      />
      <sepatator />
    </SafeAreaView>
  );
};
