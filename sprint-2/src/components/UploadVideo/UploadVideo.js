import React from "react";
import Header from "../Header/Header";
import UploadVideoMain from "../UploadVideoMain/UploadVideoMain";

class UploadVideo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <UploadVideoMain />
      </React.Fragment>
    )
  }
}

export default UploadVideo;