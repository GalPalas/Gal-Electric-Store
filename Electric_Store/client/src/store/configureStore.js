import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "store/reducer";
import cart from "store/middleware/cart";
import products from "store/middleware/products";
import productsDetails from "store/middleware/productDetails";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), products, productsDetails, cart],
  });
}