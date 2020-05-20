import React from "react";
import "./SingleNextVideo.scss"

const SingleNextVideo = props => {
    return (
        <section className="singleNextVideo">
            <div>
                <img src={props.image} alt="Video-Thumbnail" className="singleNextVideo__thumbnail" />
            </div>
            <div className="singleNextVideo__details">
                <p className="singleNextVideo__details-title">{props.title}</p>
                <p className="singleNextVideo__details-channel">{props.channel}</p>
            </div>
        </section>
    )
}

export default SingleNextVideo;