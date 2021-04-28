import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import cors from "cors";
import Swal from "sweetalert2";
import axios from "axios";
import "./YT.scss";
import ResultPage from "../result";
class YtDownloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      url: "",
      type: "",
      music: [],
      video: [],
    };
  }

  handleUrl = (e) => {
    let url = e.target.value;
    this.setState({
      url: url,
    });
  };

  handleType = (e) => {
    let type = e.target.value;
    this.setState({
      type: type,
    });
  };

  getData = () => {
    let { url, type } = this.state;
    console.log(url);
    console.log(type);
    if (url == "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Url is require",
        showConfirmButton: false,
        timer: 1500,
        width: "400px",
      });
    }
    if (type == "yt-mp3") {
      url = url.slice(17);
      axios
        .get(`https://rizkydev-api.herokuapp.com/yt-mp3?url=${url}`, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          this.setState({
            music: res.data,
          });
        });
    } else if (type == "yt-mp4") {
      alert("convert mp4");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Wrong type",
        showConfirmButton: false,
        timer: 1500,
        width: "400px",
      });
    }
  };

  render() {
    const { music } = this.state;
    console.log(music);
    return (
      <Fragment>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h4 className="text-center">
                <i className="fa fa-youtube"></i> YouTube Downloader
              </h4>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  id="url"
                  onKeyUp={this.handleUrl}
                  placeholder="https://youtu.be/Srz1kVmy9n4"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control mb-3"
                  id="type"
                  name="type"
                  onChange={this.handleType}
                >
                  <option value="">Convert to</option>
                  <option value="yt-mp3" id="yt-mp3">
                    .mp3
                  </option>
                  <option value="yt-mp4" id="yt-mp4">
                    .mp4
                  </option>
                </select>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-info btn-block"
                  onClick={this.getData}
                >
                  <i className="fa fa-download"></i> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default YtDownloader;
