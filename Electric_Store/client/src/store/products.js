import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { productsListCallBegan } from "store/actions";

const productsList = createSlice({
  name: "productsList",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {
    productListRequested: (productsList, action) => {
      productsList.loading = true;
    },
    productListSuccess: (productsList, action) => {
      productsList.products = action.payload;
      productsList.loading = false;
    },
    productListFailed: (productsList, action) => {
      productsList.error = action.payload;
      productsList.loading = false;
    },
  },
});

/* Put productsList data in store (State) */
export const listProducts = () => (dispatch) => {
  return dispatch(
    productsListCallBegan({
      url: "/api/products",
      onStart: productListRequested.type,
      onSuccess: productListSuccess.type,
      onError: productListFailed.type,
    })
  );
};

/* --------------- Return productsList from store (Selector) ---------------  */
export const productList = () =>
  createSelector(
    (state) => state.entities.productsList,
    (productsList) => productsList
  );

export const { productListRequested, productListSuccess, productListFailed } =
  productsList.actions;
export default productsList.reducer;
