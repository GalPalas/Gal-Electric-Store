import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { productsDetailsCallBegan } from "store/actions";

const productDetails = createSlice({
  name: "productDetails",
  initialState: {
    product: {},
    loading: false,
    error: false,
  },
  reducers: {
    productDetailsRequested: (productDetails, action) => {
      productDetails.loading = true;
    },
    productDetailsSuccess: (productDetails, action) => {
      productDetails.product = action.payload;
      productDetails.loading = false;
    },
    productDetailsFailed: (productDetails, action) => {
      productDetails.error = action.payload;
      productDetails.loading = false;
    },
  },
});

//
export const detailsProduct = (productId) => (dispatch) => {
  return dispatch(
    productsDetailsCallBegan({
      url: `/api/products/${productId}`,
      onStart: productDetailsRequested.type,
      onSuccess: productDetailsSuccess.type,
      onError: productDetailsFailed.type,
    })
  );
};

export const getProductDetails = () =>
  createSelector(
    (state) => state.entities.productDetails,
    (productDetails) => productDetails
  );

export const {
  productDetailsRequested,
  productDetailsSuccess,
  productDetailsFailed,
} = productDetails.actions;
export default productDetails.reducer;
