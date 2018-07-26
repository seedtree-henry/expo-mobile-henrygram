import { createMaterialTopTabNavigator } from "react-navigation";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";

const AddPhotoNavigation = createMaterialTopTabNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: "Photo"
      }
    },
    Libaray: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: "Library"
      }
    }
  },
  {
    swipeEnabled: true,
    animationEnabled: true
  }
);

export default AddPhotoNavigation;
