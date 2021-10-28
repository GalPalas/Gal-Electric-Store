/* eslint-disable no-undef */
import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/user.js";

const app = express();

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://Gal:KfjZDmQibBb0Xybu@store.dvf8b.mongodb.net/GalElectric?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find(
    (product) => product._id === req.params.id
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

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
