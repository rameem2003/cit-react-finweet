import React from "react";

const BenifitCard = (props) => {
  return (
    <div className="col-lg-3 col-sm-6 col-md-6 col-12">
      <div className="item-box">
        <img className="img-fluid" src={props.img} alt="" />

        <div className="text-area">
          <h3>WATCH AND LISTEN TO OUR SERMONS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenifitCard;
