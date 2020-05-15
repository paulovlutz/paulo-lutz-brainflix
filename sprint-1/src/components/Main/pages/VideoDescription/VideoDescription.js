import React from "react";
import iconViews from "../../../../assets/icons/svg/Icon-views.svg";
import iconLikes from "../../../../assets/icons/svg/Icon-likes.svg";

const VideoDescription = () => (
    <section className="main__videoDescription">
        <div className="main__videoTitle">
            <h1>BMX Rampage: 2018 Highlights</h1>
            <h3>By Red Cow</h3> <span> - 12/18/2018</span><br></br>
            <img src={iconViews}/> <span>1,000,023</span><br></br>
            <img src={iconLikes}/> <span>110,985</span>
        </div>
        <div className="main__videoSummary">
            <p>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
        </div>
        <div className="main__videoComments">
            <p>Array of Comments</p>
        </div>
    </section>
)

export default VideoDescription;