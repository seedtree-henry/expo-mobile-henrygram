import React from "react";
import { createStackNavigator } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

import { Image } from "react-native";
import NavButton from "../components/NavButton";

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen,
      // ({navigation }) is equivalent to (props.navigation)
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <Image
            source={require("../assets/images/logo.png")}
            style={{ height: 35 }}
            resizeMode={"contain"}
          />
        ),
        headerLeft: (
          <NavButton
            iconName={"ios-camera-outline"}
            onPress={() => navigation.navigate("TakePhoto")}
          />
        )
      })
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default HomeRoute;
