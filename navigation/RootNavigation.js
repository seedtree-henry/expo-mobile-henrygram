import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";
import UploadPhotoScreen from "../screens/UploadPhotoScreen";
import AddPhotoNavigation from "./AddPhotoNavigation";
const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null
      }
    },
    TakePhoto: {
      screen: AddPhotoNavigation,
      navigationOptions: {
        header: null
      }
    },
    UploadPhoto: {
      screen: UploadPhotoScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Upload Photo",
        // .goBack(null) : go back to previous page
        headerLeft: (
          <Button title="Cancel" onPress={() => navigation.goBack(null)} />
        )
      })
    }
  },
  {
    // modal : screen on top of root page from bottom to top
    mode: "modal"
  }
);

export default RootNavigation;
