import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/upload" component={UploadVideo} />
        <Route path="/:id" component={HomePage} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;