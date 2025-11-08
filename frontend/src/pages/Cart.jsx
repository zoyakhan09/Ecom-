import React from "react";
import CartItem from "../components/CartItem";
import "./Cart.css";

function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={onRemove} />
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
