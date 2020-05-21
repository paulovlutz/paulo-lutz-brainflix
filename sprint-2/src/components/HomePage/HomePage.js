import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import Header from "../Header/Header";
import HomePageMain from "../HomePageMain/HomePageMain";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomePageMain />
      </React.Fragment>
    )
  }
}

export default HomePage;