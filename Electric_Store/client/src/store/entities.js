import { combineReducers } from "redux";
import cartReducer from "store/cart";
import productsReducer from "store/products";
import productDetailsReducer from "store/productDetails";
import userSignInReducer from "store/userSignIn";
import userRegisterReducer from "store/userRegister";
import orderSummaryReducer from "store/order";
import orderPayReducer from "store/orderPay";
import orderDetailsReducer from "store/orderDetails";

export default combineReducers({
  productsList: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducer,
  orderSummary: orderSummaryReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
});
