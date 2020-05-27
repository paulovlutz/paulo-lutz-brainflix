import React from "react";
import playButton from "../../assets/icons/svg/Icon-play.svg";
import fullScreenButton from "../../assets/icons/svg/Icon-fullscreen.svg";
import volumeButton from "../../assets/icons/svg/Icon-volume.svg";
import "./MainVideo.scss";

const API_KEY = "?api_key=902a8ac9-fa32-406d-9ce8-6f0aea1265a3";

const MainVideo = (props) => {

    return(
        <section className="mainVideo">
        <video poster={props.image} src={props.video + API_KEY} className="mainVideo__video"></video>
        <div className="mainVideo__controls">
            <button className="mainVideo__playPause" type="button" data-state="play"><img src={playButton} alt="Play-Button" /> </button>

            <div className="mainVideo__progress">
                <progress className="mainVideo__progressBar" value="0" min="0" max="100"></progress>
                <div className="mainVideo__progressTime">0:00 / {props.duration}</div>
            </div>

            <div className="mainVideo__screen-volume">
                <button className="mainVideo__fullscreen" type="button" data-state="play"><img src={fullScreenButton} alt="Fullscreen-Button" /> </button>
                <button className="mainVideo__volume" type="button" data-state="volume"><img src={volumeButton} alt="Volume-Button" /> </button>
            </div>
        </div>
    </section>
    )
}

export default MainVideo;