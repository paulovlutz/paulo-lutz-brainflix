import React from "react";
import videoImage from "../../../../assets/images/video-list-0.jpg";
import "./MainVideo.scss";

const MainVideo = () => (
    <section className="mainVideo">
        <video poster={videoImage} className="mainVideo__video"></video>
    </section>
)

export default MainVideo;