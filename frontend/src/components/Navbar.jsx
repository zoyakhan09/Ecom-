import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
