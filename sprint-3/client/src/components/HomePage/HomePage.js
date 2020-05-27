import React from "react";
import Header from "../Header/Header";
import HomePageMain from "../HomePageMain/HomePageMain";
import axios from "axios";

const URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=902a8ac9-fa32-406d-9ce8-6f0aea1265a3";
const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends React.Component {

  setMainVideo = (mainVideoId) => {
    axios
    .get(URL + "videos/"+ mainVideoId + API_KEY)
    .then(result => {
        this.setState({
            mainVideo: result.data
        })
    })
  }

  handleCommentSubmit = (event) => {
    event.preventDefault();
    let newComment = {
      name: "BrainStation",
      comment: event.target.comment.value
    };
    event.target.reset();

    axios
        .post(URL+"videos/"+this.state.mainVideo.id+"/comments"+API_KEY,
        newComment)
        .then(response => {
            axios 
              .get(URL + "videos/"+this.state.mainVideo.id + API_KEY)
              .then(response => {
                this.setState({
                  mainVideo: response.data
                })
              })
        })
  }

  state = {
    sideVideos: [],
    mainVideo: {
        comments: []
    }
  }

componentDidMount() {
  let videoId = this.props.match.params.id;
  console.log(API_URL);

  axios
      .get(API_URL+"/videos")
      .then(result => {
          let eachVideo = result.data;
          this.setState({
              sideVideos: eachVideo
          })

          if (!videoId) {
            const firstVideo = eachVideo[0].id;
            videoId = firstVideo;
          }

          this.setMainVideo(videoId);
      })
}

componentDidUpdate(prevProps) {
  let videoId = this.props.match.params.id;

  let updateVideoId = this.state.sideVideos[0].id;

  if (prevProps.match.params.id !== videoId) {
    if (!videoId) {
      videoId = updateVideoId;
    }
      this.setMainVideo(videoId);
      window.scrollTo(0,0);
  }
}

  render() {
    let otherVideos = this.state.sideVideos.filter(video => video.id !== this.state.mainVideo.id);

    return (
      <React.Fragment>
        <Header />
        <HomePageMain mainVideo={this.state.mainVideo} sideVideos={otherVideos} handleCommentSubmit={this.handleCommentSubmit} />
      </React.Fragment>
    )
  }
}

export default HomePage;