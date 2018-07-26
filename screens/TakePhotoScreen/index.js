import React from "react";
import { View, StatusBar } from "react-native";
import AddPhotoNavigation from "../../navigation/AddPhotoNavigation";
import { SafeAreaView } from "react-navigation";

const TakePhotoScreen = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar hidden={true} />
    <AddPhotoNavigation />
  </SafeAreaView>
);

export default TakePhotoScreen;
