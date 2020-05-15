import React from "react";
import "./SingleNextVideo.scss"

const SingleNextVideo = props => {
    return (
        <section className="main__singleNextVideo">
            <p>{props.title}</p>
            <p>{props.channel}</p>
            <img src={props.image} className="main__thumbnail" />
        </section>
    )
}

export default SingleNextVideo;