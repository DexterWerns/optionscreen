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
        You put on your shirt what do you want to put on next:
      </Text>
      <RowItem
        title="underwear"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("underwear")}
          />
        }
      />

      <sepatator />

      <RowItem
        title="tie"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            color="blue"
            onPress={() => navigation.push("tie")}
          />
        }
      />
      <sepatator />
      <RowItem
        title="socks"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("socks")}
          />
        }
      />
    </SafeAreaView>
  );
};
