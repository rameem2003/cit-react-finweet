import React from "react";
import qoute from "../../public/qoute.png";
const Visit = () => {
  return (
    <section id="visit">
      <div className="container">
        <div className="box-content">
          <div className="row">
            <div className="col-lg-7 col-12">
              <h1>We want to serve the world around us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>

              <button className="btn btn-warning">Visit</button>
            </div>
            <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center">
              <img src={qoute} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
