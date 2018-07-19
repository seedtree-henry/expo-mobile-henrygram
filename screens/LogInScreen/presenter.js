import React from "react";
import { View, Text, Dimensions, Image } from "react-native"

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Image
      source={require("../../assets/images/logo-white.png")}
      resizeMode="stretch"
    />
  </View>
);

export default LogInScreen;
