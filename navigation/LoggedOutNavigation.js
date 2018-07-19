import { createStackNavigator } from "react-navigation";
import LogInScreen from "../screens/LogInScreen";

const LoggedOutNavigation = createStackNavigator({
  LogIn: {
    screen: LogInScreen
    // You can put navigationOptions in the LogInScreen container
    // navigationOptions: {
    //   // title: "Log In",
    //   header: null
    // }
  }
})

export default LoggedOutNavigation;