import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const data = [
    "../../../public/img/Slide-3.jpg",
    "../../../public/img/Slide-2.jpg",
    "../../../public/img/Slide-1.jpg",
    "../../../public/img/Slide-4.jpg",
  ];
  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <WestOutlinedIcon />
        </div>
        <div className="icon">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
