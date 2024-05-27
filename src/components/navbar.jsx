import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import product16 from "../assets/25.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={product16} alt="product16" />
      </div>
      <div  className="title-container">
        <h2>Welcome to Ancient Art Gallery of Complicated World</h2>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart"><ShoppingCart size={32} /></Link>
      </div>
    </div>
  );
};
