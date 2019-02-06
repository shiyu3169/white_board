import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile/:uid" exact component={Profile} />
          <Route path="/preview/:cid" exact component={Preview} />
          <Route path="/editor/:cid" exact component={Editor} />
        </div>
      </Router>
    );
  }
}

export default App;
