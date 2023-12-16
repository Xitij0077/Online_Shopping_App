import React from "react";
import "./Contact.scss";

import * as MuiIcons from "@mui/icons-material";

const { Facebook, Instagram, Twitter, Google, Pinterest } = MuiIcons;
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US!</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email-ID..." />
          <button>JOIN US</button>
        </div>
        <div className="icon">
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
