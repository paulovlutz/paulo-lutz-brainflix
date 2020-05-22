import React, { Component } from "react";
import "./HomePageMain.scss";
import imageVideo from "../../assets/images/video-list-0.jpg";
import profilePicture from "../../assets/images/profile-picture.jpeg";
import MainVideo from "../MainVideo/MainVideo";
import VideoDescription from "../VideoDescription/VideoDescription";
import NextVideos from "../NextVideos/NextVideos";
import axios from "axios";

const URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=902a8ac9-fa32-406d-9ce8-6f0aea1265a3";

class Main extends Component {
    state = {
        mainVideo: {
            comments: []
        }
    }

    componentDidMount() {
        const id = "1af0jruup5gu";
        axios
            .get(URL + "videos/"+id + API_KEY)
            .then(result => {
                console.log("****************")
                console.log(result.data.comments);
                this.setState({
                    mainVideo: result.data
                })
            })
    }

    render() {
        return (
            <main className="main">
            <MainVideo 
                image={this.state.mainVideo.image}
            />
            <VideoDescription 
                title={this.state.mainVideo.title}
                description={this.state.mainVideo.description}
                channel={this.state.mainVideo.channel}
                views={this.state.mainVideo.views}
                likes={this.state.mainVideo.likes}
                duration={this.state.mainVideo.duration}
                video={this.state.mainVideo.video}
                timestamp={this.state.mainVideo.timestamp}
                comments={this.state.mainVideo.comments}
            />
            <NextVideos/>
        </main>
        )
    }
}

export default Main;