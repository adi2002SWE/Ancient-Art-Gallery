import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <>
    <div className="background-img"></div>
    <div>
      <div className="shop">

        <div className="shopTitle">
          <h1>Ancient Art Gallery</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};
