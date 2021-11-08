import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { orderSummaryCallBegan } from "store/actions";

const orderSummary = createSlice({
  name: "orderSummary",
  initialState: {
    order: {},
    loading: false,
    success: false,
    error: false,
  },
  reducers: {
    orderRequested: (orderSummary, action) => {
      orderSummary.loading = true;
    },
    orderSuccess: (orderSummary, action) => {
      orderSummary.order = action.payload;
      orderSummary.success = true;
      orderSummary.loading = false;
      localStorage.removeItem("cartElectricItems");
    },
    orderFailed: (orderSummary, action) => {
      orderSummary.error = action.payload;
      orderSummary.loading = false;
    },
    orderReset: (orderSummary, action) => {
      orderSummary.order = {};
    },
  },
});

const { orderRequested, orderSuccess, orderFailed, orderReset } =
  orderSummary.actions;
export default orderSummary.reducer;

export const createOrder = (order) => (dispatch, getState) => {
  return dispatch(
    orderSummaryCallBegan({
      url: "/api/orders",
      onStart: orderRequested.type,
      onSuccess: orderSuccess.type,
      onError: orderFailed.type,
      order: order,
    })
  );
};

export const orderSummaryReset = () => (dispatch) => {
  dispatch(orderReset());
};

export const orderDetails = () =>
  createSelector(
    (state) => state.entities.orderSummary,
    (orderSummary) => orderSummary
  );
