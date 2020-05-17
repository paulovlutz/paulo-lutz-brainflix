import React, { Component } from "react";
import imageVideo1 from "../../../../assets/images/video-list-1.jpg";
import imageVideo2 from "../../../../assets/images/video-list-2.jpg";
import imageVideo3 from "../../../../assets/images/video-list-3.jpg";
import imageVideo4 from "../../../../assets/images/video-list-4.jpg";
import imageVideo5 from "../../../../assets/images/video-list-5.jpg";
import imageVideo6 from "../../../../assets/images/video-list-6.jpg";
import imageVideo7 from "../../../../assets/images/video-list-7.jpg";
import imageVideo8 from "../../../../assets/images/video-list-8.jpg";
import SingleNextVideo from "../SingleNextVideo/SingleNextVideo";
import "./NextVideos.scss";

class NextVideos extends Component {
    state = {
        sideVideos: [
            {
                id: 1, 
                title: "Become A Travel Pro In One Easy Lesson", 
                channel: "Scotty Cranmer",
                image: imageVideo1 
            },
            {
                id: 2, 
                title: "Les Houches The Hidden Gem Of The Chamonix", 
                channel: "Scotty Cranmer", 
                image: imageVideo2
            },
            {
                id: 3, 
                title: "Travel Health Useful Medical Information For", 
                channel: "Scotty Cranmer", 
                image: imageVideo3
            },
            {
                id: 4, 
                title: "Cheap Airline Tickets Great Ways To Save", 
                channel: "Emily Harper",
                image: imageVideo4
            },
            {
                id: 5, 
                title: "Take A Romantic Break In A Boutique Hotel", 
                channel: "Ethan Owen", 
                image: imageVideo5
            },
            {
                id: 6, 
                title: "Choose The Perfect Accommodations", 
                channel: "Lydia Perez", 
                image: imageVideo6
            },
            {
                id: 7, 
                title: "Cruising Destination Ideas", 
                channel: "Timothy Austin", 
                image: imageVideo7
            },
            {
                id: 8, 
                title: "Train Travel On Track For Safety", 
                channel: "Scotty Cranmer", 
                image: imageVideo8
            }
        ]
    }

    render() {
        return (
            <section className="nextVideos">
                <h3 className="nextVideos__title">NEXT VIDEO</h3>
                {this.state.sideVideos.map((video, i) => {
                    return (<SingleNextVideo key={i} title={video.title} channel={video.channel} image={video.image} />)
                })}
            </section>
        )
    }
}

export default NextVideos;