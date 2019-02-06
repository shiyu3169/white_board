import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import { Link } from "react-router-dom";
export default class Register extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <h1>Sign Up</h1>
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
            <div class="form-group">
              <label for="password2">Verify Password</label>
              <input
                class="form-control"
                type="password"
                id="password2"
                placeholder="Verify your password here..."
                required
              />
            </div>
            <Link to="/profile/1" class="btn btn-block btn-primary">
              Sign Up
            </Link>
            <a href="./Login.html">Login</a>
          </form>
        </div>
      </div>
    );
  }
}
