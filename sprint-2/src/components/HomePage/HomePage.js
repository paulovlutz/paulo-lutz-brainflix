import React from "react";
// import "./index.css";
import Header from "../Header/Header";
import HomePageMain from "../HomePageMain/HomePageMain";
import axios from "axios";

const URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=902a8ac9-fa32-406d-9ce8-6f0aea1265a3";

class HomePage extends React.Component {

  state = {
    mainVideo: {
        comments: []
    }
}

componentDidMount() {
    axios
        .get(URL + "videos/"+this.props.match.params.id + API_KEY)
        .then(result => {
            console.log("****************")
            console.log(result.data.comments);
            this.setState({
                mainVideo: result.data
            })
        })
}

componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
        axios
            .get(URL + "videos/"+this.props.match.params.id + API_KEY)
            .then(result => {
                console.log("****************")
                console.log(result.data.comments);
                this.setState({
                    mainVideo: result.data
                })
            })
        }
}

  render() {
    return (
      <React.Fragment>
        <Header />
        <HomePageMain mainVideo={this.state.mainVideo} />
      </React.Fragment>
    )
  }
}

export default HomePage;