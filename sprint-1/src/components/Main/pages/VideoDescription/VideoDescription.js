import React from "react";
import "./VideoDescription.scss";
import iconViews from "../../../../assets/icons/svg/Icon-views.svg";
import iconLikes from "../../../../assets/icons/svg/Icon-likes.svg";
import profilePicure from "../../../../assets/images/profile-picture.jpeg";

const VideoDescription = (props) => (
    <section className="videoDescription">
        <div className="videoDescription__title">
            <h1>{props.title}</h1>
            
            <div className="videoDescription__channel">
                <h3>By {props.channel}</h3> 
                <span className="videoDescription__channel-date">{props.timestamp}</span>
            </div>

            <div class="videoDescription__icons">
                <img src={iconViews} alt="Views-Icon" /> <span>{props.views}</span>
                <img src={iconLikes} alt="Likes-Icon" /> <span>{props.likes}</span>
            </div>
        </div>

        <hr className="videoDescription__divider"></hr>

        <div className="videoDescription__summary">
            <p>{props.description}</p>
        </div>

        <div className="videoDescription__conversation">
            <h2 className="videoDescription__title">3 Comments</h2>

            <div className="videoDescription__joinConversation">
                <form action="" method="" class="videoDescription__joinConversation-form">
                    <div class="videoDescription__joinConversation-row">
                        <div class="videoDescription__joinConversation-picture">
                            <img class="videoDescription__joinConversation-profilePicture" src={profilePicure} alt="profile-picture" />
                        </div>
                        <div class="videoDescription__joinConversation-details">
                            <label for="comment" class="videoDescription__joinConversation-heading">JOIN THE CONVERSATION</label>
                            <textarea name="comment" cols="30" rows="5" placeholder="Add a new comment"></textarea>
                            <div class="videoDescription__joinConversation-submit-button">
                                <button type="submit" class="videoDescription__joinConversation-submit">COMMENT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <div className="videoDescription__comments">
                { props.comments.map((comment, i) => {
                    return (
                        <div className="videoDescription__comments-card">
                            <div className="videoDescription__comments-profilePicture">
                                <img src={comment.profilePicture}></img>
                            </div>
                            <div className="videoDescription__comments-details">
                                <div className="videoDescription__comments-nameAndDate">
                                    <p className="videoDescription__comments-nameAndDate-name">{comment.name}</p>
                                    <p className="videoDescription__comments-nameAndDate-date">{comment.date}</p>
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