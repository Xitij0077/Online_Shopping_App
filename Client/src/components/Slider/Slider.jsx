// import React, { useState } from "react";
// import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
// import "./Slider.scss";

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const data = [
//     "../../../public/img/Slide-3.jpg",
//     "../../../public/img/Slide-2.jpg",
//     "../../../public/img/Slide-1.jpg",
//     "../../../public/img/Slide-4.jpg",
//   ];
//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
//   };
//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
//   };

//   return (
//     <div className="slider">
//       <div
//         className="container"
//         style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
//       >
//         <img src={data[0]} alt="" />
//         <img src={data[1]} alt="" />
//         <img src={data[2]} alt="" />
//         <img src={data[3]} alt="" />
//       </div>
//       <div className="icons">
//         <div className="icon" onClick={prevSlide}>
//           <WestOutlinedIcon />
//         </div>
//         <div className="icon" onClick={nextSlide}>
//           <EastOutlinedIcon />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    { image: "../../../public/img/Slide-3.jpg", text: "Exclusive Collection" },
    {
      image: "../../../public/img/Slide-2.jpg",
      text: "Exclusive Deals, Instant Happiness!",
    },
    {
      image: "../../../public/img/Slide-1.jpg",
      text: "Elevate Your Style, Save!",
    },
    {
      image: "../../../public/img/Slide-4.jpg",
      text: "Master the Art of Smart Shopping.",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item, index) => (
          <div key={index} className="slide">
            <img src={item.image} alt="" />
            <div className="text-overlay">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
