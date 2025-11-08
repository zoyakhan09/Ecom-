import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

import connectDB from "../config/db.js";

dotenv.config();

const products = [
  { name: "Wireless Mouse", price: 799, description: "Ergonomic mouse" },
  { name: "Mechanical Keyboard", price: 2499, description: "Blue switches" },
  { name: "Noise‑cancelling Headphones", price: 5999, description: "Over ear" },
  { name: "USB‑C Charger", price: 899, description: "Fast charging" },
  { name: "Webcam 1080p", price: 1999, description: "HD webcam" },
];

const run = async () => {
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Seeded products");
  process.exit();
};

run();
