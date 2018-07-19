import React, { Component } from "react";
import LogInScreen from './presenter';

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  render() {
    return <LogInScreen />
  }
}

export default Container;