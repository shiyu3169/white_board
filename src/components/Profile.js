import React, { Component } from "react";
import Navbar from "./layout/Navbar";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <h1>Profile</h1>
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                required
                class="form-control"
                type="text"
                id="username"
                placeholder="Enter your username here..."
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input
                class="form-control"
                type="text"
                id="phone"
                placeholder="(xxx)xxx-xxxx"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                class="form-control"
                type="email"
                id="email"
                placeholder="xxx@gmail.com"
              />
            </div>
            <div class="form-group">
              <label for="dob">Date of Birth</label>
              <input class="form-control" type="date" id="dob" />
            </div>
            <div class="form-group">
              <label for="role">Role</label>
              <input
                readonly
                class="form-control"
                type="string"
                id="role"
                value="Student"
              />
            </div>
            <button class="btn btn-block btn-success">Update</button>
            <a href="Login.html" class="btn btn-block btn-danger">
              Logout
            </a>
          </form>
        </div>
      </div>
    );
  }
}
