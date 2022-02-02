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
        You wake up in your bed on a monday and everything seems normal. Do you
        want to:
      </Text>
      <RowItem
        title="get dressed"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("Get Dressed")}
          />
        }
      />

      <sepatator />

      <RowItem
        title="go back to sleep"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            color="blue"
            onPress={() => navigation.push("sleep")}
          />
        }
      />
      <sepatator />
      <RowItem
        title="Shower"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            color="blue"
            onPress={() => navigation.push("shower")}
          />
        }
      />
    </SafeAreaView>
  );
};
