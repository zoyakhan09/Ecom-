import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products({ onAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // mock data
    setProducts([
      { id: 1, name: "Laptop", price: 60000 },
      { id: 2, name: "Phone", price: 30000 },
      { id: 3, name: "Headphones", price: 2000 },
      { id: 4, name: "Smartwatch", price: 8000 },
      { id: 5, name: "Keyboard", price: 1500 },
    ]);
  }, []);

  return (
    <div className="products-page">
      <h2>Available Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default Products;
