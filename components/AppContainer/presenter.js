import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";

const { width, height } = Dimensions.get("window");
class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        {isLoggedIn ? (
          <Text>You are logged in</Text>
        ) : (
            <LoggedOutNavigation />
          )}
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "stretch",
//     justifyContent: "center"
//   }
// })

export default AppContainer;