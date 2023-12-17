import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/2755612/pexels-photo-2755612.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nemo
          nisi voluptatum itaque unde beatae ullam deleniti dolore provident
          obcaecati, labore tempora voluptatibus cum velit voluptates ab, totam
          ad! Rerum.
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            <ArrowCircleLeftRoundedIcon className="icon" />
          </button>
          <div className="qty">{quantity}</div>

          <button onClick={() => setQuantity((prev) => prev + 1)}>
            <ArrowCircleRightRoundedIcon className="icon" />
          </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item1">
            <FavoriteBorderIcon />
            Add To Wishlist
          </div>
          <div className="item">
            <BalanceIcon />
            Add To Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo
            voluptates adipisci soluta atque eius tempore temporibus consectetur
            laborum est eaque officia assumenda aut, possimus, veritatis, iure
            cum blanditiis! Expedita.
          </p>

          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            dolores commodi omnis laboriosam magni? Deserunt quas aspernatur
            repudiandae? Tenetur, earum accusantium! Laborum, aliquam ad. Id sit
            cupiditate sapiente libero veritatis!
          </p>

          <span>FAQ</span>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
            quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
