import React, { Component } from "react";
import image from "../../../../assets/images/video-list-1.jpg";
import SingleNextVideo from "../SingleNextVideo/SingleNextVideo";

class NextVideos extends Component {
    state = {
        sideVideos: [
            {
                id: 1, 
                title: "Title 1", 
                channel: "Channel 1", 
                image: image 
            },
            {
                id: 2, 
                title: "Title 2", 
                channel: "Channel 2", 
                image: image
            },
            {
                id: 3, 
                title: "Title 3", 
                channel: "Channel 3", 
                image: image
            }
        ]
    }

    render() {
        return (
            <React.Fragment>
            {this.state.sideVideos.map((video, i) => {
                return (<SingleNextVideo key={i} title={video.title} channel={video.channel} image={video.image} />)
            })}
            </React.Fragment>
        )
    }
}

export default NextVideos;