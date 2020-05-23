import React from "react";
import "./VideoDescription.scss";
import iconViews from "../../assets/icons/svg/Icon-views.svg";
import iconLikes from "../../assets/icons/svg/Icon-likes.svg";
import profilePicture from "../../assets/images/profile-picture.jpeg";

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

        <div className="videoDescription__conversation">
            <h2 className="videoDescription__title-conversation">3 Comments</h2>

            <div className="videoDescription__joinConversation">
                <form action="" method="" className="videoDescription__joinConversation-form">
                    <div className="videoDescription__joinConversation-row">
                        <div className="videoDescription__joinConversation-picture">
                            <img className="videoDescription__joinConversation-profilePicture" src={profilePicture} alt="Profile-Picture" />
                        </div>
                        <div className="videoDescription__joinConversation-details">
                            <div className="videoDescription__joinConversation-details-title">
                                <label htmlFor="comment" className="videoDescription__joinConversation-heading">JOIN THE CONVERSATION</label>
                            </div>
                            <textarea name="comment" cols="30" rows="5" placeholder="Write comment here"></textarea>
                            <div className="videoDescription__joinConversation-submit-button">
                                <button type="submit" className="videoDescription__joinConversation-submit">COMMENT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <div className="videoDescription__comments">
                { props.comments.map(comment => {
                    return (
                        <div className="videoDescription__comments-card">
                            <div className="videoDescription__comments-profilePicture">
                                <img src={profilePicture} alt="Profile-Picture"></img>
                            </div>
                            <div className="videoDescription__comments-details">
                                <div className="videoDescription__comments-nameAndDate">
                                    <p className="videoDescription__comments-nameAndDate-name">{comment.name}</p>
                                    <p className="videoDescription__comments-nameAndDate-date">{buildTimeDescription(comment.timestamp)}</p>
                                </div>
                                <p className="videoDescription__comments-comment">
                                    {comment.comment}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
)

export default VideoDescription;