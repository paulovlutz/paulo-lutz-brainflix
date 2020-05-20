import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import Header from "../../Header/Header";
import Main from "../../Main/Main";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default HomePage;