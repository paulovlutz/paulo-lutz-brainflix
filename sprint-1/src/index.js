import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Main />
  </React.Fragment>,
  document.getElementById('root')
);