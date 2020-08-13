import React, { Component } from "react";
import { products } from "./../data/products";

const Item = () => {
  return (
    <React.Fragment>
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 ">
            <a href="#">
              <img className="card-img-top" src={product.img} alt="" />
            </a>

            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item One</a>
              </h4>
              <h5>{product.price}</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Item;
