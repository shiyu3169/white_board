import React, { Component } from "react";
import Navbar from "./layout/Navbar";
import { Link } from "react-router-dom";
export default class Preview extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-2 bg-grey">
              <div class="side">
                <div
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical">
                  <a
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true">
                    Module 1 - Client Side
                  </a>
                  <a
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false">
                    Module 2 - Server Side
                  </a>
                  <a
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false">
                    Module 3 - Database
                  </a>
                  <a
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false">
                    Module 4 - Security
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-10">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true">
                    HTML
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false">
                    CSS
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false">
                    Bootstrap
                  </a>
                </li>
              </ul>

              <div class="row">
                <div class="width-full">
                  <div class="float-right">
                    <button class="btn btn-success mr-3">Save</button>
                    <span>Preview</span>
                    <Link to="/editor/1" class="btn pl-0">
                      <i class="fas fa-toggle-on fa-3x" />
                    </Link>
                  </div>
                </div>
              </div>
              <h1>Module 1 - HTML</h1>

              <div>
                <h2>HTML</h2>
              </div>
              <br />

              <div>
                <img
                  src="https://cdn-images-1.medium.com/max/1096/1*28-1lYrYTQoLhi87mllgBw.png"
                  alt="widget"
                />
              </div>
              <br />

              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  title="youtube"
                  src="https://www.youtube.com/embed/ZidoWAVpgtQ"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
