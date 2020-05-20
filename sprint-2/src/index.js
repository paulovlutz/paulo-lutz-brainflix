import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UploadVideo from "./components/pages/UploadVideo/UploadVideo";
import HomePage from "./components/pages/HomePage/HomePage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/upload" component={UploadVideo} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);