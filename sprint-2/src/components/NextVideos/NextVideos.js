import React, { Component } from "react";
import SingleNextVideo from "../SingleNextVideo/SingleNextVideo";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NextVideos.scss";

class NextVideos extends Component {

    render() {
        return (
            <section className="nextVideos">
                <h3 className="nextVideos__title">NEXT VIDEO</h3>
                {this.props.sideVideos.map(video => {
                    return (<Link to={video.id} className="nextVideos__link"><SingleNextVideo key={video.id} title={video.title} channel={video.channel} image={video.image} /></Link>)
                })}
            </section>
        )
    }
}

export default NextVideos;