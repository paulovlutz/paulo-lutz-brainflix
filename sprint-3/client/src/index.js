import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import HomePage from "./components/HomePage/HomePage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/upload" component={UploadVideo} />
      <Route path="/:id" component={HomePage} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);