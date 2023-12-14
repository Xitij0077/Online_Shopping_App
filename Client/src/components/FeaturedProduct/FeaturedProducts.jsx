import React from "react";
import "./FeaturedProduct.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 3,
      img: "https://images.pexels.com/photos/2755612/pexels-photo-2755612.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },

    {
      id: 4,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, fuga
          et adipisci ipsum doloribus quam ducimus accusantium odio asperiores
          quas? Magnam, laudantium? Debitis, perferendis sunt alias inventore
          excepturi rem accusamus.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
