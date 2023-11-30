import React from "react";
import BoxItem from "./BoxItem";
import about_icon_1 from "../../public/about-icon-1.png";
import about_icon_2 from "../../public/about-icon-2.png";
import about_icon_3 from "../../public/about-icon-3.png";

const data = [
  {
    icon: about_icon_1,
    title: "About us",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: about_icon_2,
    title: "Get involved",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: about_icon_3,
    title: "Giving back",
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="title">
          <h2>sub-headline</h2>
          <h1>a church that's relevant</h1>
        </div>

        <div className="row mt-5">
          {data.map((dt, i) => {
            return (
              <div className="col-lg-4 col-sm-6 col-12">
                <BoxItem info={dt} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
