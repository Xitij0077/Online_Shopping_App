// import { styled } from "styled-components";
// import Product from "./Product";

// import { popularProducts } from "../data";
// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Products = () => {
//   return (
//     <Container>
//       <Arrow />
//       {popularProducts.map((item) => (
//         <Product item={item} key={item.id} />
//       ))}
//     </Container>
//   );
// };

// export default Products;

import React, { useState } from "react";
import { styled } from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  position: relative;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.5;
  position: absolute;
  top: 50%;
  ${(props) => (props.right ? "right: 10px;" : "left: 10px;")}
  transform: translateY(-50%);
  z-index: 1; /* Ensure arrows appear on top of the product wrapper */
`;

const Wrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.translateValue}px);
`;

const ProductsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle clicking on the left arrow
  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? popularProducts.length - 5 : prev - 1
    );
  };

  // Handle clicking on the right arrow
  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === popularProducts.length - 5 ? 0 : prev + 1
    );
  };

  // Automatically advance to the next slide every 5 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     handleNextSlide();
  //   }, 2000); // Adjust the interval duration as needed

  //   return () => clearInterval(intervalId); // Cleanup on component unmount
  // }, [currentSlide]);
  return (
    <Container>
      <SliderContainer>
        {/* Left Arrow */}
        <Arrow onClick={handlePrevSlide}>
          <ArrowLeftOutlined />
        </Arrow>
        {/* Product Wrapper */}
        <Wrapper translateValue={-currentSlide * 280}>
          {popularProducts.map((item, index) => (
            <Product item={item} key={index} />
          ))}
        </Wrapper>
        {/* Right Arrow */}
        <Arrow right onClick={handleNextSlide}>
          <ArrowRightOutlined />
        </Arrow>
      </SliderContainer>
    </Container>
  );
};

export default ProductsSlider;
