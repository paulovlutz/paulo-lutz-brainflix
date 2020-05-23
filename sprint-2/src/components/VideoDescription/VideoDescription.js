import React from "react";
import "./VideoDescription.scss";
import iconViews from "../../assets/icons/svg/Icon-views.svg";
import iconLikes from "../../assets/icons/svg/Icon-likes.svg";
import Comments from "../Comments/Comments";

function buildTimeDescription(time) {
    let currentDate = new Date();

    let msMinute = 60 * 1000;
    let msHour = msMinute * 60;
    let msDay = msHour * 24;
    let msMonth = msDay * 30;
    let msYear = msDay * 365;

    let difference = currentDate - time;

    if (difference < msMinute) {
         return "Posted " + Math.round(difference/1000) + "s ago";   
    }

    else if (difference < msHour) {
         return "Posted " + Math.round(difference/msMinute) + "m ago";   
    }

    else if (difference < msDay ) {
         return "Posted " + Math.round(difference/msHour ) + "h ago";   
    }

    else if (difference < msMonth) {
        return "Posted" + Math.round(difference/msDay) + " days ago";   
    }

    else if (difference < msYear) {
        return "Posted " + Math.round(difference/msMonth) + " months ago";   
    }

    else {
        return "Posted " + Math.round(difference/msYear ) + " years ago";   
    }
}

const VideoDescription = (props) => (
    <section className="videoDescription">
        <div className="videoDescription__title">
            <h1 className="videoDescription__videoTitle">{props.title}</h1>
            
            <div className="videoDescription__channel">
                <h3 className="videoDescription__channel-author">By {props.channel}</h3> 
                <span className="videoDescription__channel-date">{buildTimeDescription(props.timestamp)}</span>
            </div>

            <div className="videoDescription__icons">
                <img src={iconViews} alt="Views-Icon" /> <span>{props.views}</span>
                <img src={iconLikes} alt="Likes-Icon" /> <span>{props.likes}</span>
            </div>
        </div>

        <hr className="videoDescription__divider"></hr>

        <div className="videoDescription__summary">
            <p>{props.description}</p>
        </div>
        
        <Comments handleCommentSubmit={props.handleCommentSubmit} comments={props.comments} buildTimeDescription={buildTimeDescription} />
    </section>
)

export default VideoDescription;