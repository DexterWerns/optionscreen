import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Linking,
  Image,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { RowItem, separator, styles } from "../components/rowitem";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.Text}>
        you hit your head while picking up the soap and die.
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
    </SafeAreaView>
  );
};