import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeRoute from "../routes/HomeRoute";
import SearchRoute from "../routes/SearchRoute";
import NotificationsRoute from "../routes/NotificationsRoute";
import ProfileRoute from "../routes/ProfileRoute";

import { Ionicons } from "@expo/vector-icons";

const bottomTabNavigation = createBottomTabNavigator(
  // Tab is not a screen.
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        // focused means selected.
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        // focused means selected.
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-search" : "ios-search-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    AddPhoto: {
      screen: View,
      navigationOptions: ({ navigation }) => ({
        // focused means selected.
        tabBarIcon: ({ focused }) => (
          <Ionicons name={"ios-add-circle-outline"} size={30} color={"black"} />
        ),
        tabBarOnPress: () => {
          navigation.navigate("TakePhoto");
        }
      })
    },
    Notifications: {
      screen: NotificationsRoute,
      navigationOptions: {
        // focused means selected.
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-heart" : "ios-heart-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        // focused means selected.
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={focused ? "ios-person" : "ios-person-outline"}
            size={30}
            color={"black"}
          />
        )
      }
    }
  },
  {
    // tabBarComponent = ({jumpToIndex, ...props, navigation}) => (

    // ),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#FBFBFB",
        height: 45
      }
    }
  }
);

export default bottomTabNavigation;
