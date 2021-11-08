import axios from "axios";
import { removeAllItemsFromCart } from "store/cart";
import { orderSummaryCallBegan } from "store/actions";

const orderSummary =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== orderSummaryCallBegan.type) return next(action);

    const { url, onStart, onSuccess, onError, order } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const userToken = getState().entities.userSignIn.user.token;
      const { data } = await axios.post(url, order, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: data });
        dispatch(removeAllItemsFromCart());
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

export default orderSummary;
