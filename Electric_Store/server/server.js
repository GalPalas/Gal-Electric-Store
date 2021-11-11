/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import cors from "cors";
import userRouter from "./routers/user.js";
import productRouter from "./routers/product.js";
import orderRouter from "./routers/order.js";

dotenv.config();

const app = express();

// app.use(
//   cors({
//     origin: "https://c.sandbox.paypal.com",
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://Gal:KfjZDmQibBb0Xybu@store.dvf8b.mongodb.net/GalElectric?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server at http://localhost:${port}`);
});

//KfjZDmQibBb0Xybu
