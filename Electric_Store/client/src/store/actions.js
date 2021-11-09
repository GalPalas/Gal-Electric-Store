import { createAction } from "@reduxjs/toolkit";

/* Products Slice Actions  */
export const productsListCallBegan = createAction(
  "productsList/productsListBegan"
);
export const productsDetailsCallBegan = createAction(
  "productsDetails/productsDetailsBegan"
);
export const cartCallBegan = createAction("cart/cartBegan");

export const userSignInCallBegan = createAction("userSignIn/userSignInBegan");
export const userRegisterCallBegan = createAction(
  "userRegister/userRegisterBegan"
);

export const orderSummaryCallBegan = createAction(
  "orderSummary/orderSummaryBegan"
);

export const orderDetailsCallBegan = createAction(
  "orderDetails/orderDetailsBegan"
);
