import express from "express";
import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";

const router = express.Router();

// GET /api/cart
router.get("/", async (req, res) => {
  const items = await CartItem.find().populate("product");
  const total = items.reduce((s, it) => s + it.product.price * it.qty, 0);
  res.json({ items, total });
});

// POST /api/cart
router.post("/", async (req, res) => {
  const { productId, qty } = req.body;
  // simple upsert: if same product exists, increase qty
  let existing = await CartItem.findOne({ product: productId });
  if (existing) {
    existing.qty += qty || 1;
    await existing.save();
    return res.json(existing);
  }
  const item = await CartItem.create({ product: productId, qty: qty || 1 });
  await item.populate("product");
  res.status(201).json(item);
});

// DELETE /api/cart/:id
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await CartItem.findByIdAndDelete(id);
  res.json({ ok: true });
});

export default router;
