import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container-fluid">
          <form class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Adding new course..."
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit">
                <i class="fas fa-plus-circle" />
              </button>
            </div>
          </form>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Owned by</th>
                <th>Last modified time</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/editor/1">Music</Link>
                </td>
                <td>Alice Wonder</td>
                <td>02-05-2019</td>
                <td>
                  <button class="btn">
                    <i class="fas fa-edit" />
                  </button>
                </td>
                <td>
                  <button class="btn">
                    <i class="fas fa-trash-alt" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/editor/2">Programming</Link>
                </td>
                <td>Shiyu Wang</td>
                <td>02-07-2019</td>
                <td>
                  <button class="btn">
                    <i class="fas fa-edit" />
                  </button>
                </td>
                <td>
                  <button class="btn">
                    <i class="fas fa-trash-alt" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/editor/3">Physics</Link>
                </td>
                <td>John Doe</td>
                <td>02-09-2019</td>
                <td>
                  <button class="btn">
                    <i class="fas fa-edit" />
                  </button>
                </td>
                <td>
                  <button class="btn">
                    <i class="fas fa-trash-alt" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
