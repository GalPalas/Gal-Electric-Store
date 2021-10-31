/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user.js";
import productRouter from "./routers/product.js";

const app = express();

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://Gal:KfjZDmQibBb0Xybu@store.dvf8b.mongodb.net/GalElectric?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server at http://localhost:${port}`);
});

//KfjZDmQibBb0Xybu
