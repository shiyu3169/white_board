import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <h1>Sign In</h1>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                class="form-control"
                type="text"
                id="username"
                placeholder="Enter your username here..."
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                class="form-control"
                type="password"
                id="password"
                placeholder="Enter your password here..."
                required
              />
            </div>
            <Link to="/profile/1" class="btn btn-block btn-primary">
              Sign In
            </Link>
            <a href="https://reacttraining.com/react-router/web/guides/quick-start">
              Forget Password?
            </a>
            <Link to="/register" class="float-right">
              Sign up
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
