import React from "react";
import "./../CSS/slider.css";

import Destinations from "./Destinations";
import AppNew from "./AppNew";
import Code from "./Code";

export default function Slider() {
  const slideDetails = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Imperial Hotel Sri Lanka",
      content: "Most Populer Hotel In the Sri Lanka."
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Imperial Hotel ",
      content:
        "Come with us through the whimsical world of Imperial, where your personal paradise awaits.."
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rooms & Suites",
      content: "Tastefully designed with the modern traveler in mind."
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Imperial Restaurant",
      content: "Celebrate the art of Chinese cuisine in the heart of Sri Lanka."
    }
  ];

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slideDetails.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.imageSrc}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption text-center">
                <h1>{slide.title}</h1>
                <p>{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-sm-10 col-lg-10 mx-auto bg-white shadow p-2 rounded">
              <form>
                <div className="row">
                  <div className="col-sm-3 col-md-3 col-lg-3 col-12 mb-2">
                    <input
                      type="date"
                      id="date"
                      className="form-control shadow-none"
                    />
                  </div>
                  <div className=" col-sm-3 col-md-3 col-lg-3  col-12 mb-2">
                    <input
                      type="date"
                      id="date"
                      className="form-control shadow-none"
                    />
                  </div>
                  <div className=" col-sm-2 col-md-2 col-lg-2 col-12 mb-2">
                    <AppNew />
                  </div>
                  <div className="col-sm-2 col-md-2 col-lg-2 col-12 mb-2">
                    <Code />
                  </div>
                  <div className=" col-sm-2 col-md-2 col-lg-2 col-12 mb-2">
                    <button type="submit" className="btn btn-primary ">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Destinations />
    </div>
  );
}
