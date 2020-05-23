import React, { Component } from "react";
import "./HomePageMain.scss";
import MainVideo from "../MainVideo/MainVideo";
import VideoDescription from "../VideoDescription/VideoDescription";
import NextVideos from "../NextVideos/NextVideos";

class HomePageMain extends Component {

    render() {
        return (
            <main className="main">
            <MainVideo 
                image={this.props.mainVideo.image}
            />
            <VideoDescription 
                title={this.props.mainVideo.title}
                description={this.props.mainVideo.description}
                channel={this.props.mainVideo.channel}
                views={this.props.mainVideo.views}
                likes={this.props.mainVideo.likes}
                duration={this.props.mainVideo.duration}
                video={this.props.mainVideo.video}
                timestamp={this.props.mainVideo.timestamp}
                comments={this.props.mainVideo.comments}
            />
            <NextVideos sideVideos={this.props.sideVideos} />
        </main>
        )
    }
}

export default HomePageMain;