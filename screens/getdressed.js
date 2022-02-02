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
      <Text style={styles.Text}> What do you want to put on first.</Text>
      <RowItem
        title="shirt"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("shirt")}
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
      <sepatator />
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
    </SafeAreaView>
  );
};
