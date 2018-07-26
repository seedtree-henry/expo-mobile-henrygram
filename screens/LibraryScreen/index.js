import React, { Component } from "react";
import { CameraRoll } from "react-native";
import LibraryScreen from "./presenter";
class Container extends Component {
  state = {
    photo: null,
    pickedPhoto: null
  };

  componentWillMount = async () => {
    const cameraPhotos = await CameraRoll.getPhotos({
      first: 20,
      groupTypes: "SavedPhotos",
      assetType: "Photos"
    });
    this.setState({
      photos: cameraPhotos.edges,
      pickedPhoto: cameraPhotos.edges[0]
    });
  };

  render() {
    return <LibraryScreen {...this.state} pickPhoto={this._pickPhoto} />;
  }
  _pickPhoto = photo => {
    this.setState({
      pickedPhoto: photo
    });
  };
}

export default Container;
