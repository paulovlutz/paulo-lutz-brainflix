import React from "react";
import "./SingleNextVideo.scss"

const SingleNextVideo = props => {
    return (
        <section className="singleNextVideo">
            <div>
                <img src={props.image} className="singleNextVideo__thumbnail" />
            </div>
            <div class="singleNextVideo__details">
                <p class="singleNextVideo__details-title">{props.title}</p>
                <p>{props.channel}</p>
            </div>
        </section>
    )
}

export default SingleNextVideo;