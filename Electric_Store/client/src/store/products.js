import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "store/api";

const productsList = createSlice({
  name: "productsList",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {
    callRequested: (productsList, action) => {
      productsList.loading = true;
    },
    callSuccess: (productsList, action) => {
      productsList.products = action.payload;
      productsList.loading = false;
    },
    callFailed: (productsList, action) => {
      productsList.error = action.payload;
      productsList.loading = false;
    },
  },
});

/* Load productsList from API */
export const listProducts = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      onStart: callRequested.type,
      onSuccess: callSuccess.type,
      onError: callFailed.type,
    })
  );
};

export const productList = () =>
  createSelector(
    (state) => state.entities.productsList,
    (productsList) => productsList
  );

export const { callRequested, callSuccess, callFailed } = productsList.actions;
export default productsList.reducer;
