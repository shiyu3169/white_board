import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
export default class Editor extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container-fluid ">
          <div class="row">
            <div class="col-lg-2 bg-grey">
              <div class="side">
                <div class="nav flex-column nav-pills">
                  <span class="nav-link active" data-toggle="pill">
                    Module 1 - Client Side
                  </span>
                  <span class="nav-link" data-toggle="pill">
                    Module 2 - Server Side
                  </span>
                  <span class="nav-link" data-toggle="pill">
                    Module 3 - Database
                  </span>
                  <span class="nav-link" data-toggle="pill">
                    Module 4 - Security
                  </span>
                </div>
                <button class="btn btn-success btn-block">
                  <i class="fas fa-plus" />
                </button>
              </div>
            </div>
            <div class="col-lg-10">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <span class="nav-link active" data-toggle="tab">
                    HTML
                  </span>
                </li>
                <li class="nav-item">
                  <span class="nav-link" data-toggle="tab">
                    CSS
                  </span>
                </li>
                <li class="nav-item">
                  <span class="nav-link" data-toggle="tab">
                    Bootstrap
                  </span>
                </li>
              </ul>

              <div class="row">
                <div class="width-full">
                  <div class="float-right">
                    <button class="btn btn-success mr-3">Save</button>
                    <span>Preview</span>
                    <Link to="/preview/1" class="btn pl-0">
                      <i class="fas fa-toggle-off fa-3x" />
                    </Link>
                  </div>
                </div>
              </div>
              <div class="form-group input-group-lg">
                <input
                  class="form-control"
                  type="text"
                  value="Module 1 - HTML"
                />
              </div>

              <div class="widget mb-1">
                <div class="pt-2">
                  <div class="float-right">
                    <select class="custom-select widget-select">
                      <option>Heading</option>
                      <option>Paragraph</option>
                      <option>Image</option>
                      <option>Youtube</option>
                    </select>
                    <button class="btn btn-warning">
                      <i class="fas fa-arrow-circle-up" />
                    </button>
                    <button class="btn btn-warning">
                      <i class="fas fa-arrow-circle-down" />
                    </button>
                    <button class="btn btn-danger">
                      <i class="far fa-trash-alt" />
                    </button>
                  </div>
                </div>
                <div class="form-group clear">
                  <label for="heading-text-1">
                    <strong>Text</strong>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter heading text here"
                  />
                </div>
                <div class="form-group">
                  <label for="heading-text-1">
                    <strong>Size</strong>
                  </label>
                  <select class="custom-select">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                    <option>Heading 6</option>
                  </select>
                </div>
              </div>

              <div class="widget mb-1">
                <div class="pt-2">
                  <div class="float-right">
                    <select class="custom-select widget-select">
                      <option>Image</option>
                      <option>Heading</option>
                      <option>Paragraph</option>
                      <option>Youtube</option>
                    </select>
                    <button class="btn btn-warning">
                      <i class="fas fa-arrow-circle-up" />
                    </button>
                    <button class="btn btn-warning">
                      <i class="fas fa-arrow-circle-down" />
                    </button>
                    <button class="btn btn-danger">
                      <i class="far fa-trash-alt" />
                    </button>
                  </div>
                </div>
                <div class="form-group clear">
                  <label for="heading-text-1">
                    <strong>Url</strong>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter image url here"
                  />
                </div>
                <div class=" form-group">
                  <label for="heading-text-1">
                    <strong>Size</strong>
                  </label>
                  <div class="input-group">
                    <input
                      type="number"
                      id="size-2"
                      class="form-control"
                      placeholder="Enter image size here"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget mb-1">
                <div class="pt-2">
                  <div class="float-right">
                    <select class="custom-select widget-select">
                      <option>Youtube</option>
                      <option>Heading</option>
                      <option>Paragraph</option>
                      <option>Image</option>
                    </select>
                    <button class="btn btn-warning">
                      <i class="fas fa-arrow-circle-up" />
                    </button>
                    <button class="btn btn-warning">
                      <i class="fas fa-arrow-circle-down" />
                    </button>
                    <button class="btn btn-danger">
                      <i class="far fa-trash-alt" />
                    </button>
                  </div>
                </div>
                <div class="form-group clear">
                  <label for="heading-text-1">
                    <strong>Url</strong>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Youtube url here"
                  />
                </div>
                <div class="form-group">
                  <label for="heading-text-1">
                    <strong>Size</strong>
                  </label>
                  <div class="input-group">
                    <input
                      type="number"
                      id="size-2"
                      class="form-control"
                      placeholder="Enter Youtube size here"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-danger btn-block mt-4">
                <i class="fas fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
