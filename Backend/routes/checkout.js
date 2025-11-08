import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// POST /api/checkout
router.post("/", async (req, res) => {
  const { cartItems, name, email } = req.body;
  // For mock: compute total and return receipt
  const total = cartItems.reduce((s, it) => s + it.product.price * it.qty, 0);
  const receipt = {
    id: Date.now().toString(36),
    total,
    timestamp: new Date(),
    name,
    email,
  };
  // Optionally: clear cart in DB. For a mock, we'll leave it but provide a hint.
  res.json(receipt);
});

export default router;
