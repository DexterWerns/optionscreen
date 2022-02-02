import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import options from "../screens/options";
import getdressed from "./getdressed";
import shirt from "./shirt.js";
import sleep from "./sleep";
import shower from "./shower";
import fall from "./fall";
import underwear from "./underwear";
import tie from "./tie";
import socks from "./socks";
import shampoo from "./shampoo";
import soap from "./soap.js";
import getout from "./getout";
import pickitup from "./pickitup";

const MainStack = createStackNavigator();
const MainStackScreeen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="A Complete Waste of Time" component={options} />
    <MainStack.Screen name="Get Dressed" component={getdressed} />
    <MainStack.Screen name="shirt" component={shirt} />
    <MainStack.Screen name="sleep" component={sleep} />
    <MainStack.Screen name="shower" component={shower} />
    <MainStack.Screen name="fall" component={fall} />
    <MainStack.Screen name="underwear" component={underwear} />
    <MainStack.Screen name="tie" component={tie} />
    <MainStack.Screen name="socks" component={socks} />
    <MainStack.Screen name="shampoo" component={shampoo} />
    <MainStack.Screen name="soap" component={soap} />
    <MainStack.Screen name="Get out" component={getout} />
    <MainStack.Screen name="Pick it up" component={pickitup} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreeen />
  </NavigationContainer>
);
