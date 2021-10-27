import { createAction } from "@reduxjs/toolkit";

/* Products Slice Actions  */
export const productsListCallBegan = createAction(
  "productsList/productsListBegan"
);
export const productsDetailsCallBegan = createAction(
  "productsDetails/productsDetailsBegan"
);
