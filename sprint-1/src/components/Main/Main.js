import React from "react";
import "./Main.scss";
import MainVideo from "./pages/MainVideo/MainVideo";
import VideoDescription from "./pages/VideoDescription/VideoDescription";
import NextVideos from "./pages/NextVideos/NextVideos";

const Main = () => (
    <main className="main">
        <MainVideo/>
        <VideoDescription/>
        <NextVideos/>
    </main>
)

export default Main;