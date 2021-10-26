import { combineReducers } from "redux";
import productsReducer from "store/products";

export default combineReducers({
  productsList: productsReducer,
});
