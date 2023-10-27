import React, { useState } from "react";
import Experience from "./Experience";
import "./../CSS/Destinations.css";

export default function Destinations() {
  const [selectedOption, setSelectedOption] = useState(null);

  const imageUrls = ["images/d2.jpg", "images/d4.jpg", "images/d3.jpg"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <section className="des">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <h1 className="desh1">Our Destinations</h1>
            <form>
              <select
                className="form-control"
                id="desselect"
                onChange={handleOptionChange}
              >
                <option value="0">Imperial Beautiful Place</option>
                <option value="1">Imperial Swimming Pool</option>
                <option value="2">Imperial Village</option>
              </select>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-12 col-lg-4 col-md-4">
              <img src="../images/sl.jpg" id="cardddd" alt="Sri Lanka" />
            </div>
            <div className="col-sm-12 col-12 col-lg-4 col-md-4">
              {selectedOption !== null ? (
                <img
                  className="dimg11"
                  src={imageUrls[selectedOption]}
                  alt={`Image ${selectedOption + 1}`}
                />
              ) : (
                <img
                  className="dimg11"
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Default Image"
                />
              )}
            </div>

            <div className="col-sm-4 col-12 col-lg-4 col-md-4">
              <div className="card" id="carddd">
                <div className="card-body">
                  <h5 className="card-title" id="cti">
                    Imperial Hotels
                  </h5>
                  <p className="card-text" id="ct">
                    Imperial Velifushi Maldives, a one-resort island for sun,
                    activity, relaxation, and luxury surrounded by exotic marine
                    life and a swimmable lagoon.
                  </p>
                  <a href="" className="btn btn-primary" id="btntn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Experience />
    </div>
  );
}
