import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <div className="cart">
        <div>
          <h1 className="Empty-cart">Your Cart Items :</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            } return null;
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p className="total"> Subtotal: ₹{totalAmount} </p>
            <button className="Cs" onClick={() => navigate("/")}> Continue Shopping </button>
            <button 
              onClick={() => {
                checkout();
                alert("Congratulation !! Your Order is placed.\nContinue Shopping...")
                navigate("/");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1 className="Empty-cart"> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};
