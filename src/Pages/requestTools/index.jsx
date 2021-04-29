import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Swal from "sweetalert2";
import { init } from "emailjs-com";
import axios from "axios";
import $ from "jquery";
import HomePage from "../HomePage";

class RequestTools extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    init("user_gPcKdq1hcnEmPMYX5oekb");
    $("#request-form").on("click", function (event) {
      event.preventDefault(); // prevent reload

      let formData = new FormData();
      formData.append("service_id", "service_bpgycd4");
      formData.append("template_id", "template_tss41hg");
      formData.append("user_id", "user_gPcKdq1hcnEmPMYX5oekb");

      let email = $("#email");

      if (!email.val()) {
        Swal.fire({
          icon: "warning",
          text: "Datanya kosong... isi lebih dulu yhaa",
        });
      } else {
        axios
          .post(`https://api.emailjs.com/api/v1.0/email/send-form`, formData)
          .then((res) => {
            Swal.fire({
              icon: "success",
              text: "Terimakasih, Request berhasil dikirim ;)",
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              text: "Maaf, request gagal dikirim;)",
            });
          });
      }
    });
  };
  render() {
    return (
      <div>
        <HomePage />
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <i className="fa fa-sticky-note"></i> Request tools
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Request your tools"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  id="request-form"
                  className="btn btn-primary"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RequestTools;
