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
        You get the shampoo in your eyes and the shower demons kill you.
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://pics.me.me/when-you-in-the-shower-and-the-lights-flicker-stay-57939965.png",
        }}
      />
    </SafeAreaView>
  );
};
