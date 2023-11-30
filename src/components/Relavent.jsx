import React from "react";
import relavent1 from "../../public/relavent-pic-1.png";
import relavent2 from "../../public/relavent-pic-2.png";
import relavent3 from "../../public/relavent-pic-3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Relavent = () => {
  return (
    <section id="relavent">
      <div className="container">
        <div className="title">
          <h2>sub-headline</h2>
          <h1>love and compassion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <button className="btn btn-warning m-auto d-block">REad more</button>

        <div className="row d-flex align-items-start justify-content-center mt-5">
          <div className="col-lg-3 col-sm-6 col-12 pos-rel">
            <img className="top-img img-fluid" src={relavent2} alt="" />
          </div>
          <div className="col-lg-4 col-sm-6 col-12 middle-img">
            <img className=" img-fluid" src={relavent1} alt="" />
          </div>
          <div className="col-lg-3 col-sm-6 col-12 pos-rel">
            <img className="top-img img-fluid" src={relavent3} alt="" />
          </div>
        </div>

        <div className="title sub-title">
          <h2>our mission & vision</h2>
          <h1>celebrate WITH US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a href="#">
            Read More <FaArrowRightLong />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Relavent;
