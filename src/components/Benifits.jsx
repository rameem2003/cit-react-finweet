import React from "react";
import benifit1 from "../../public/benifit-pic-1.png";
import benifit2 from "../../public/benifit-pic-2.png";
import benifit3 from "../../public/benifit-pic-3.png";
import benifit4 from "../../public/benifit-pic-4.png";
import BenifitCard from "./BenifitCard";

const Benifits = () => {
  return (
    <section id="benifits">
      <div className="container">
        <div className="title">
          <h2>Watch and listen</h2>
          <h1>THE benefits of</h1>
          <h1>joining our church</h1>
        </div>

        <div className="row cards">
          <BenifitCard img={benifit1} />
          <BenifitCard img={benifit2} />
          <BenifitCard img={benifit3} />
          <BenifitCard img={benifit4} />
        </div>
      </div>
    </section>
  );
};

export default Benifits;
