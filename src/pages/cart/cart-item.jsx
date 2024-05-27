import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="img-product"/>
      <div className="cart-description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ₹{price}</p>
        <div className="countHandler">
          <button className="inc-dec-btn" onClick={() => removeFromCart(id)}> - </button>
          <input className="Quantity"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="inc-dec-btn" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
