import React, { Component } from "react";
import "./HomePageMain.scss";
import imageVideo from "../../assets/images/video-list-0.jpg";
import profilePicture from "../../assets/images/profile-picture.jpeg";
import MainVideo from "../MainVideo/MainVideo";
import VideoDescription from "../VideoDescription/VideoDescription";
import NextVideos from "../NextVideos/NextVideos";

class Main extends Component {
    state = {
        mainVideo: {
            id: '1',
            title: 'BMX Rampage: 2018 Highlights',
            description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
            channel: 'Red Cow',
            image: imageVideo,
            views: '1,000,023',
            likes: '110,985',
            duration: '',
            video: '',
            timestamp: '12/18/2018',
            comments: [
                {
                    id: 1,
                    profilePicture: profilePicture,
                    name: 'Micheal Lyons',
                    date: '12/18/2018',
                    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
                },

                {
                    id: 2,
                    profilePicture: profilePicture,
                    name: 'Gary Wong',
                    date: '12/18/2018',
                    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
                },

                {
                    id: 3,
                    profilePicture: profilePicture,
                    name: 'Theodore Duncan',
                    date: '11/15/2018',
                    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
                }
            ]
        }
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
                // duration={this.state.mainVideo.duration}
                // video={this.state.mainVideo.video}
                timestamp={this.state.mainVideo.timestamp}
                comments={this.state.mainVideo.comments}
            />
            <NextVideos/>
        </main>
        )
    }
}

export default Main;