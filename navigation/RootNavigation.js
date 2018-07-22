import { createStackNavigator } from "react-navigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";
import TabsNavigation from "./TabsNavigation";

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null
      }
    },
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    // modal : screen on top of root page from bottom to top
    mode: "modal"
  }
);

export default RootNavigation;
