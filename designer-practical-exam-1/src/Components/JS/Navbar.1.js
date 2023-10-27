import React from "react";
import Slider from "./slider";

export const Navbar = () => {
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About ", link: "/about" },
    { text: "Rooms", link: "/rooms" },
    { text: "Dining", link: "/dining" },
    { text: "Experience", link: "/experience" },
    { text: "Events", link: "/events" },
    { text: "Gallery", link: "/gallery" },
    { text: "Offers", link: "/offers" }
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" // Fix this line to target the correct ID
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.text}>
                  <a className="nav-link" href={item.link}>
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <button>
                  <a
                    className="nav-link disabled"
                    href=""
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Find a Hotel
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Slider />
    </div>
  );
};
