import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../CSS/NavBarHeader.css";
import "./../CSS/mobile.css";
import Navbar from "./Navbar";

export default function NavBarHeader() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <div className="header">
              <img
                className="logo"
                src="https://i.pinimg.com/originals/17/da/5a/17da5a63b833ad9cf36e8b2688314f6d.gif"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
            <div className="headerfirst">
              <a className="head" href="#">
                <i className="bi bi-person"></i>&nbsp;Sing In &nbsp;|
              </a>
              <a className="head" href="#">
                Join Now &nbsp;|
              </a>
              <a className="head" href="">
                For Reservation &nbsp; |
              </a>
              <a className="head" href="">
                <i className="bi bi-globe"></i>&nbsp;English &nbsp;|
              </a>
              <a className="head" href="">
                LKR <i className="bi bi-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
