import React from "react";
import "./SingleComment.scss"
import profilePicture from "../../assets/images/profile-picture.jpeg";

function SingleComment(props) {
    return(
        <div className="videoDescription__comments-card">
        <div className="videoDescription__comments-profilePicture">
            <img src={profilePicture} alt="Profile"></img>
        </div>
        <div className="videoDescription__comments-details">
            <div className="videoDescription__comments-nameAndDate">
                <p className="videoDescription__comments-nameAndDate-name">{props.commentName}</p>
                <p className="videoDescription__comments-nameAndDate-date">{props.buildTimeDescription(props.timestamp)}</p>
            </div>
            <p className="videoDescription__comments-comment">
                {props.comment}
            </p>
        </div>
    </div>
    )
}

export default SingleComment;