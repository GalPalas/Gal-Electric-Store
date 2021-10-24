import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server at http://localhost:${port}`);
});
