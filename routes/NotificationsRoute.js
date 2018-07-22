import { createStackNavigator } from "react-navigation";
import NotificationsScreen from "../screens/NotificationsScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const NotificationsRoute = createStackNavigator(
  {
    Home: {
      screen: NotificationsScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default NotificationsRoute;
