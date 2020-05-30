import React from "react";
import "./UploadVideoMain.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class UploadVideoMain extends React.Component {

    handleUploadSubmit = (event) => {
        event.preventDefault();
        let newVideo = {
            title: event.target.videoTitle.value,
            image: videoThumbnail,
            description: event.target.description.value
        }
        event.target.reset();

        axios
            .post(API_URL + "/upload", newVideo)
    }

    render() {
        return(
            <>
                <hr className="upload__divider"></hr>
                <div className="upload">
                    <h1 className="upload__title">Upload Video</h1>
                    <form onSubmit={this.handleUploadSubmit}>
                        <div className="upload__videoContainer">
                            <label htmlFor="video" className="upload__label">VIDEO THUMBNAIL</label>
                            <img className="upload__video" src={videoThumbnail} alt="Video-Thumbnail" name="video"></img>
                        </div>
    
                        <div className="upload__textContainer">
                            <label htmlFor="videoTitle" className="upload__label">TITLE YOUR VIDEO</label>
                            <input className="upload__videoTitle" type="text" name="videoTitle" placeholder="Add a title to your video"></input>
    
                            <label htmlFor="description" className="upload__label">ADD A VIDEO DESCRIPTION</label> 
                            <textarea className="upload__textarea" name="description" cols="30" rows="5" placeholder="Add a description of your video"></textarea>
                        </div>
    
                        <div className="upload__buttons">
                            <button type="submit" className="upload__submit">PUBLISH</button>
                            <button type="submit" className="upload__cancel">CANCEL</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default UploadVideoMain;