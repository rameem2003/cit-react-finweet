import React from "react";
import surmons from "../../public/surmons.jpg";
import clock from "../../public/clock.png";
import pin from "../../public/pin.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Surmons = () => {
  return (
    <section id="surmons">
      <div className="container">
        <div className="title">
          <h2>Upcoming SERMONS</h2>
          <h1>join us and become part</h1>
          <h1>of something great</h1>
        </div>

        <div className="row add-banner">
          <div className="col-lg-4 col-md-6">
            <div className="text-area">
              <h4>Upcoming Event</h4>
              <h3>WATCH AND LISTEN TO OUR SERMONS</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>

              <ul>
                <li>
                  <img src={clock} alt="" />

                  <p>Friday 23:39 IST Saturday 11:20 ISD.</p>
                </li>

                <li>
                  <img src={pin} alt="" />

                  <p>No 233 Main St. New York, United States</p>
                </li>
              </ul>

              <button className="btn btn-dark">COntact us</button>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 p-0">
            <img className="img-fluid" src={surmons} alt="" />
          </div>
        </div>

        <a href="#" className="adver_link">
          View all Sermons <FaArrowRightLong />
        </a>
      </div>
    </section>
  );
};

export default Surmons;
