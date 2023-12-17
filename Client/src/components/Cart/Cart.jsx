import React from "react";
import "./Cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: "https://images.pexels.com/photos/2755612/pexels-photo-2755612.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Skirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>SUB-TOTAL</span>
        <span>$123</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
