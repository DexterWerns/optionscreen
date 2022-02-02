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
      <Text style={styles.Text}>You fall and die.</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "http://cdn.shopify.com/s/files/1/0082/5682/articles/Tension_Rod_Falling_Man_1024x1024.PNG?v=1496626621",
        }}
      />
    </SafeAreaView>
  );
};
