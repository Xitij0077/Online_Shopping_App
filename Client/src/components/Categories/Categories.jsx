import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <React.Fragment>
      <div className="head">
        <h1>Categories</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, fuga
          et adipisci ipsum doloribus quam ducimus accusantium odio asperiores
          quas? Magnam, laudantium? Debitis, perferendis sunt alias inventore
          excepturi rem accusamus.
        </p>
      </div>
      <div className="categories">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link className="link" to="/products/1">
                Men
              </Link>
            </button>
          </div>

          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link className="link" to="/products/1">
                Woman
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2221879/pexels-photo-2221879.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link className="link" to="/products/1">
                New Season
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/9595291/pexels-photo-9595291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link className="link" to="/products/1">
                    Accessories
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link className="link" to="/products/1">
                    Sale
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link className="link" to="/products/1">
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
