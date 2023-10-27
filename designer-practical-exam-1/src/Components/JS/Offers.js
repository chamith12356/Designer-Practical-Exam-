import React from "react";
import Footer from "./Footer";
import "./../CSS/Offers.css";
export default function Offers() {
  // Sample data for your cards
  const cardData = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?auto=format&fit=crop&q=80&w=2009&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rooms & Suites",
      description1: "Amaara Circle Exclusive Member Rate with Breakfast",
      description2:
        "Exclusive Member Rate with Breakfast for Amaara Circle member"
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Family Suites",
      description1: "Amaara Circle Exclusive Member Rate",
      description2: "Exclusive Member Rate for Amaara hotel Circle member."
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?auto=format&fit=crop&q=80&w=1915&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Seasonal Events",
      description1: "Celebrate the Spirit of Negroni at Capital Bar & Grill",
      description2:
        "Raise your glass to honour an icon that has taken over bars all over the world."
    }
  ];

  // Create cards with data
  const cards = cardData.map((card, index) => (
    <div className="col-lg-4 col-md-4 col-sm-4 col-xxl-4 col-12" key={index}>
      <div className="card" id="cardoffer1">
        <img
          src={card.imageUrl}
          alt={card.title}
          id="nimg"
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title" id="ntitle">
            {card.title}
          </h4>
          <p className="card-text" id="ncard">
            {card.description1}
          </p>
          <p className="card-text" id="ntext">
            {card.description2}
          </p>
          <button id="nbtn">View Details</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container">
        <div className="row">
          <h3>Offer</h3>
          {cards}
        </div>
      </div>
      <Footer />
    </div>
  );
}
