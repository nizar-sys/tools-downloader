import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Swal from "sweetalert2";
import axios from "axios";
import "./YT.scss";
import ResultPage from "../result";
class YtDownloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      isLoading: false,
      type: "",
      music: [],
      video: [],
    };
  }

  handleUrl = (e) => {
    let url = e.target.value;
    this.setState({
      url: url,
      isLoading: false,
    });
  };

  handleType = (e) => {
    let type = e.target.value;
    this.setState({
      type: type,
      isLoading: false,
    });
  };

  getData = () => {
    let { url, type } = this.state;
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
      this.setState({
        isLoading: true,
      });
      // https://youtu.be/Srz1kVmy9n4
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://rizkydev-api.herokuapp.com/yt-mp3?url=${url}`
        )
        .then((res) => {
          this.setState({
            music: res,
            isLoading: false,
          });
        });
    } else if (type == "yt-mp4") {
      this.setState({
        isLoading: true,
      });
      // https://youtu.be/Srz1kVmy9n4
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://rizkydev-api.herokuapp.com/yt-mp4?url=${url}`
        )
        .then((res) => {
          this.setState({
            music: res,
            isLoading: false,
          });
        });
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
    const { music, isLoading } = this.state;
    console.log(music);
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
                    {isLoading === false ? (
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-block"
                        onClick={this.getData}
                      >
                        <i className="fa fa-download"></i> Download
                      </button>
                    ) : (
                      <button
                        type="submit"
                        name="submit"
                        disabled
                        className="btn btn-info btn-block"
                        onClick={this.getData}
                      >
                        <i className="fa fa-download"></i> Loading
                      </button>
                    )}
                  </div>
                  {music.status == 200 ? (
                    <ResultPage music={music.data} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default YtDownloader;
