import React from "react";
const BoxItem = (props) => {
  const { info } = props;
  return (
    <div className="box-item">
      <img src={info.icon} alt="" />
      <h3>{info.title}</h3>
      <p>{info.dis}</p>
      <div className="bar"></div>
    </div>
  );
};

export default BoxItem;
