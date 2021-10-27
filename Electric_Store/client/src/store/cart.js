import { createSlice } from "@reduxjs/toolkit";
import { cartCallBegan } from "store/actions";
import { createSelector } from "reselect";

const cart = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartElectricItems")
      ? JSON.parse(localStorage.getItem("cartElectricItems"))
      : [],
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
  },
});

export const addItemToCart = (productId, qty) => (dispatch, getState) => {
  return dispatch(
    cartCallBegan({
      url: `/api/products/${productId}`,
      qty: qty,
      onSuccess: cardItemAdded.type,
    })
  );
};

/* --------------- Return how many items in cart (Selector) ---------------  */
export const numberOfItems = () =>
  createSelector(
    (state) => state.entities.cart,
    (cart) => cart
  );

export const { cardItemAdded } = cart.actions;
export default cart.reducer;
