import React from "react";
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
      screen: HomeRoute
    },
    Search: {
      screen: SearchRoute
    },
    Notifications: {
      screen: NotificationsRoute
    },
    Profile: {
      screen: ProfileRoute
    }
  },
  {}
);

export default bottomTabNavigation;
