import { createSlice } from "@reduxjs/toolkit";
import { cartCallBegan } from "store/actions";
import { createSelector } from "reselect";

const cart = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartElectricItems")
      ? JSON.parse(localStorage.getItem("cartElectricItems"))
      : [],
    error: false,
  },
  reducers: {
    cardItemAdded: (cart, action) => {
      const item = action.payload;
      const existItem = cart.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        cart.cartItems = cart.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        cart.cartItems.push(item);
      }
      localStorage.setItem("cartElectricItems", JSON.stringify(cart.cartItems));
    },
    cartItemRemoved: (cart, action) => {
      cart.cartItems = cart.cartItems.filter(
        (item) => item.product !== action.payload
      );
      localStorage.setItem("cartElectricItems", JSON.stringify(cart.cartItems));
    },
    cartItemFailed: (cart, action) => {
      cart.error = action.payload;
    },
  },
});

export const addItemToCart = (productId, qty) => (dispatch, getState) => {
  return dispatch(
    cartCallBegan({
      url: `/api/products/${productId}`,
      qty: qty,
      onSuccess: cardItemAdded.type,
      onError: cartItemFailed.type,
    })
  );
};

const { cardItemAdded, cartItemRemoved, cartItemFailed } = cart.actions;
export default cart.reducer;

export const removeItemFromCart = (productId) => (dispatch, getState) => {
  dispatch(cartItemRemoved(productId));
};

/* --------------- Return how many items in cart (Selector) ---------------  */
export const getCartItems = () =>
  createSelector(
    (state) => state.entities.cart,
    (cart) => cart
  );
