import React from "react";
import './CartItem.css';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>
        <p>Qty: {item.qty}</p>
        <p>Price: ₹{item.price}</p>
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
