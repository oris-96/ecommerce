import React from "react";
import { Category } from "./category";

import Item from "./item";
import { welcomeProduct } from "./../data/welcomeProduct";

const Product = () => {
  const product = welcomeProduct;
  return (
    <div className="container mt-5">
      <div className="row ">
        <Category />
        <div className="col-lg-9">
          <div
            id="carouselExampleIndicators"
            className="carousel slide my-4"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block img-fluid"
                  src={product[0].welcome}
                  alt="First slide"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
