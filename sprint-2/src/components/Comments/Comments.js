import React from "react";
import "./Comments.scss";
import axios from "axios";
import profilePicture from "../../assets/images/profile-picture.jpeg";

const URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=902a8ac9-fa32-406d-9ce8-6f0aea1265a3";

class Comments extends React.Component {
    render() {
        return (
            <div className="videoDescription__conversation">
                <h2 className="videoDescription__title-conversation">3 Comments</h2>
        
                <div className="videoDescription__joinConversation">
                    <form onSubmit={this.props.handleCommentSubmit} action="" method="" className="videoDescription__joinConversation-form">
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
                    { this.props.comments.map(comment => {
                        return (
                            <div className="videoDescription__comments-card">
                                <div className="videoDescription__comments-profilePicture">
                                    <img src={profilePicture} alt="Profile-Picture"></img>
                                </div>
                                <div className="videoDescription__comments-details">
                                    <div className="videoDescription__comments-nameAndDate">
                                        <p className="videoDescription__comments-nameAndDate-name">{comment.name}</p>
                                        <p className="videoDescription__comments-nameAndDate-date">{this.props.buildTimeDescription(comment.timestamp)}</p>
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
        )
    }
}

export default Comments;