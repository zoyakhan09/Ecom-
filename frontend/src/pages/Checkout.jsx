import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ cart }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    setReceipt({
      name: form.name,
      total,
      timestamp: new Date().toLocaleString(),
    });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">Place Order</button>
      </form>

      {receipt && (
        <div className="receipt">
          <h3>Thank you, {receipt.name}!</h3>
          <p>Total: ₹{receipt.total}</p>
          <p>Time: {receipt.timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
