import React, { Component } from "react";
import SingleNextVideo from "../SingleNextVideo/SingleNextVideo";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NextVideos.scss";

const URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=902a8ac9-fa32-406d-9ce8-6f0aea1265a3";

class NextVideos extends Component {
    state = {
        sideVideos: []
    }

    componentDidMount() {
        axios
            .get(URL+"videos"+API_KEY)
            .then(result => {
                let eachVideo = result.data;
                this.setState({
                    sideVideos: eachVideo
                })
            })
    }

    render() {
        return (
            <section className="nextVideos">
                <h3 className="nextVideos__title">NEXT VIDEO</h3>
                {this.state.sideVideos.map(video => {
                    return (<Link to={video.id} className="nextVideos__link"><SingleNextVideo key={video.id} title={video.title} channel={video.channel} image={video.image} /></Link>)
                })}
            </section>
        )
    }
}

export default NextVideos;