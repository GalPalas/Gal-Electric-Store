import axios from "axios";
import { orderPayCallBegan } from "store/actions";

const orderPay =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== orderPayCallBegan.type) return next(action);

    const { url, onStart, onSuccess, onError, paymentResult } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const userToken = getState().entities.userSignIn.user.token;
      const { data } = await axios.put(url, paymentResult, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: data });
      }
    } catch (error) {
      if (onError)
        dispatch({
          type: onError,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
    }
  };

export default orderPay;
