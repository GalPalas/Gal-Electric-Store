import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "store/reducer";
import cart from "store/middleware/cart";
import products from "store/middleware/products";
import orderPay from "store/middleware/orderPay";
import orderSummary from "store/middleware/order";
import userSignIn from "store/middleware/userSignIn";
import orderDetails from "store/middleware/orderDetails";
import userRegister from "store/middleware/userRegister";
import productsDetails from "store/middleware/productDetails";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      products,
      productsDetails,
      cart,
      userSignIn,
      userRegister,
      orderSummary,
      orderDetails,
      orderPay,
    ],
  });
}
