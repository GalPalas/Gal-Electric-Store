import { combineReducers } from "redux";
import cartReducer from "store/cart";
import productsReducer from "store/products";
import productDetailsReducer from "store/productDetails";

export default combineReducers({
  productsList: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});