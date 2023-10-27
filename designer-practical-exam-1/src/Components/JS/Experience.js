import React from "react";
import Offers from "./Offers";
import "./../CSS/Experience.css";
export default function Experience() {
  // Sample data for your cards
  const cardData = [
    {
      imageUrl:
        "https://media.istockphoto.com/id/1386851505/photo/happy-inspired-beautiful-young-indian-woman-breathing-fresh-air.jpg?s=2048x2048&w=is&k=20&c=FDI_AiGY_p2no0mhUYrVem9EVooQNLwQTDUu1ufBJzY=",
      text: "MULTIPLE YOUR TIME"
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1192936664/photo/morning-breakfast-or-brunch-in-the-restaurant-table-with-drinks-and-food-selective-focus.jpg?s=2048x2048&w=is&k=20&c=yRdTfqiZJc6eyhAgTygN1sjvkx3KoZHc_OcRksEL-wk=",
      text: "Free Bonus Points at new hotels"
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: " DISCOUNT - SAVE UP TO 17%"
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Join Hilton Honors Get Up to 4,500 Points"
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1622050956578-94fd044a0ada?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Park & Stay"
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1686316978658-81df4c96d757?auto=format&fit=crop&q=80&w=1936&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Experience the Stay"
    }
  ];

  // Create cards with data

  const cards = cardData.map((card, index) => (
    <div className="col-md-4 col-sm-4 col-lg-4 col-12 " key={index}>
      <div className="card" id="ecard">
        <img
          id="eimg1"
          src={card.imageUrl}
          alt={card.text}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text" id="ecardbody">
            {card.text}
          </p>
        </div>
      </div>
    </div>
  ));

  // Split cards into rows of three
  const rows = [];
  for (let i = 0; i < cards.length; i += 3) {
    rows.push(
      <div className="row" key={i}>
        {cards.slice(i, i + 3)}
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <h2 id="hd">Experience Something New</h2>
          <p id="ph">
            Fall into a relaxing stay with one of our exclusive offers.
          </p>
        </div>
      </div>

      <div class="container"> {rows}</div>
      <Offers />
    </div>
  );
}
