import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productsRouter from "./routes/products.js";
import cartRouter from "./routes/cart.js";
import checkoutRouter from "./routes/checkout.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/checkout", checkoutRouter);

const PORT = 4000;

connectDB()
  .then(() => {
    console.log("Database connected successfully!");

    // 2. Define routes and start the server INSIDE the .then() block
    // app.get('/', (req, res) => res.send('API Running'));
    // ... Your other routes ...

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  });
