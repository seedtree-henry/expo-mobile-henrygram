import React from "react";
import { View, Text } from "react-native";

const FeedScreen = props => (
  <View>
    <Text onPress={() => props.navigation.navigate("Likes")}>Feed</Text>
  </View>
);

export default FeedScreen;