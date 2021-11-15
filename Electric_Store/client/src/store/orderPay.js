import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { orderPayCallBegan } from "store/actions";

const orderPay = createSlice({
  name: "orderPay",
  initialState: {
    order: {},
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    orderPayRequested: (orderPay, action) => {
      orderPay.loading = true;
    },
    orderPaySuccess: (orderPay, action) => {
      orderPay.order = action.payload;
      orderPay.success = true;
      orderPay.loading = false;
    },
    orderPayFailed: (orderPay, action) => {
      orderPay.error = action.payload;
      orderPay.loading = false;
    },
    orderPayReset: (orderPay, action) => {
      orderPay.order = {};
    },
  },
});

const { orderPayRequested, orderPaySuccess, orderPayFailed, orderPayReset } =
  orderPay.actions;
export default orderPay.reducer;

export const payOrder = (order, paymentResult) => (dispatch) => {
  return dispatch(
    orderPayCallBegan({
      url: `/api/orders/${order._id}/pay}`,
      onStart: orderPayRequested.type,
      onSuccess: orderPaySuccess.type,
      onError: orderPayFailed.type,
      paymentResult: paymentResult,
    })
  );
};

export const orderPayResetList = () => (dispatch) => {
  dispatch(orderPayReset());
};

export const orderPayInfo = () =>
  createSelector(
    (state) => state.entities.orderPay,
    (orderPay) => orderPay
  );
