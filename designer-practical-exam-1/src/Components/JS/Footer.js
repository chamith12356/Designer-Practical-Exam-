import React from "react";
import "./../CSS/footer.css";
import { useState } from "react";

export default function Footer() {
  const [scrolledDown, setScrolledDown] = useState(false);

  // Function to handle scrolling to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Event listener to check if the user has scrolled down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      // User has scrolled down, show the scroll-up button
      setScrolledDown(true);
    } else {
      // User is at the top of the page, hide the scroll-up button
      setScrolledDown(false);
    }
  });
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-12 col-sm-4">
              <h3 className="ih">About</h3>
              <ul>
                <li className="ii">
                  <a className="ia" href="">
                    Home{" "}
                  </a>
                </li>
                <li className="ii">
                  <a className="ia" href="">
                    About Us
                  </a>
                </li>
                <li className="ii">
                  <a className="ia" href="">
                    Rooms & Suites
                  </a>
                </li>
                <li className="ii">
                  <a className="ia" href="">
                    Dining
                  </a>
                </li>
                <li className="ii">
                  <a className="ia" href="">
                    Experience
                  </a>
                </li>
                <li className="ii">
                  <a className="ia" href="">
                    Events
                  </a>
                </li>
                <li className="ii">
                  <a className="ia" href="">
                    Gallery
                  </a>
                </li>
                <li className="ii">
                  <a className="ia" href="">
                    Offer
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-4 col-12 col-sm-4">
              <h3 className="ih">Get in Touch</h3>
              <ul>
                <li className="iin">
                  <a className="ia" href="">
                    Know Sri Lanka
                  </a>
                </li>
                <li className="iin">
                  <a className="ia" href="">
                    Contact Us
                  </a>
                </li>
                <li className="iin">
                  <a className="ia" href="">
                    FAQs
                  </a>
                </li>
              </ul>
              <h3 className="ihi">Sections</h3>
              <ul>
                <li className="iin">
                  <a className="ia" href="">
                    Careers
                  </a>
                </li>
                <li className="iin">
                  <a className="ia" href="">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-4 col-12 col-sm-4">
              <h3 className="ihv1">Follow Us</h3>
              <ul className="lu">
                <li className="iii">
                  <a className="ia" href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="iii">
                  <a className="ia" href=""></a>
                  <i className="bi bi-instagram"></i>
                </li>
                <li className="iii">
                  <a className="ia" href=""></a>
                  <i className="bi bi-twitter"></i>
                </li>
                <li className="iii">
                  <a className="ia" href=""></a>
                  <i className="bi bi-youtube"></i>
                </li>
                <li className="iii">
                  {" "}
                  {scrolledDown && (
                    <button
                      className="scroll-up-button"
                      onClick={handleScrollToTop}
                    >
                      <i className="bi bi-chevron-double-up"></i>
                    </button>
                  )}
                </li>
              </ul>

              <h3 className="ihv">Get Imperial In</h3>
              <input
                id="input"
                type="text"
                className="form-control"
                placeholder="Enter your email"
              />
              <p className="lp">Subscribe to our newsletter for updates.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
