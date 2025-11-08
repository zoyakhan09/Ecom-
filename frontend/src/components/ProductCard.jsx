import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
