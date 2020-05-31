import React from "react";
import "./Comments.scss";
import SingleComment from "../SingleComment/SingleComment";
import profilePicture from "../../assets/images/profile-picture.jpeg";

class Comments extends React.Component {
    render() {
        let orderedComments = this.props.comments;
        orderedComments.sort(function compare(a, b) {
            return (b.timestamp - a.timestamp);
        });
        return (
            <div className="videoDescription__conversation">
                <h2 className="videoDescription__title-conversation">{orderedComments.length} Comments</h2>
        
                <div className="videoDescription__joinConversation">
                    <form onSubmit={this.props.handleCommentSubmit} action="" method="" className="videoDescription__joinConversation-form">
                        <div className="videoDescription__joinConversation-row">
                            <div className="videoDescription__joinConversation-picture">
                                <img className="videoDescription__joinConversation-profilePicture" src={profilePicture} alt="Profile" />
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
                    { orderedComments.map(comment => {
                        return (
                            <SingleComment key={comment.id} commentName={comment.name} buildTimeDescription={this.props.buildTimeDescription} timestamp={comment.timestamp} comment={comment.comment} />
                            // <div className="videoDescription__comments-card" key={comment.id}>
                            //     <div className="videoDescription__comments-profilePicture">
                            //         <img src={profilePicture} alt="Profile"></img>
                            //     </div>
                            //     <div className="videoDescription__comments-details">
                            //         <div className="videoDescription__comments-nameAndDate">
                            //             <p className="videoDescription__comments-nameAndDate-name">{comment.name}</p>
                            //             <p className="videoDescription__comments-nameAndDate-date">{this.props.buildTimeDescription(comment.timestamp)}</p>
                            //         </div>
                            //         <p className="videoDescription__comments-comment">
                            //             {comment.comment}
                            //         </p>
                            //     </div>
                            // </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Comments;