import React from "react";
import InovateCard from "./InovateCard";

const Inovate = () => {
  return (
    <section id="inovate">
      <div className="container">
        <div className="title">
          <h2>Read our Blog</h2>
          <h1>SHARE, INSPIRE, INNOVATE</h1>
        </div>

        <div className="row mt-5">
          <InovateCard />
          <InovateCard />
          <InovateCard />
          <InovateCard />
        </div>
      </div>
    </section>
  );
};

export default Inovate;
