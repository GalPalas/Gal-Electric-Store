import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { orderDetailsCallBegan } from "store/actions";

const orderDetails = createSlice({
  name: "orderDetails",
  initialState: {
    order: {},
    loading: true,
    error: false,
  },
  reducers: {
    orderDetailsRequested: (orderDetails, action) => {
      orderDetails.loading = true;
    },
    orderDetailsSuccess: (orderDetails, action) => {
      orderDetails.order = action.payload;
      orderDetails.loading = false;
    },
    orderDetailsFailed: (orderDetails, action) => {
      orderDetails.error = action.payload;
      orderDetails.loading = false;
    },
  },
});

const { orderDetailsRequested, orderDetailsSuccess, orderDetailsFailed } =
  orderDetails.actions;
export default orderDetails.reducer;

export const detailsOrder = (orderId) => (dispatch) => {
  return dispatch(
    orderDetailsCallBegan({
      url: `/api/orders/${orderId}`,
      onStart: orderDetailsRequested.type,
      onSuccess: orderDetailsSuccess.type,
      onError: orderDetailsFailed.type,
    })
  );
};

export const orderInfo = () =>
  createSelector(
    (state) => state.entities.orderDetails,
    (orderDetails) => orderDetails
  );
