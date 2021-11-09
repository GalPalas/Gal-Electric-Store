import axios from "axios";
import { orderDetailsCallBegan } from "store/actions";

const orderDetails =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== orderDetailsCallBegan.type) return next(action);

    const { url, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const userToken = getState().entities.userSignIn.user.token;
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (onSuccess) dispatch({ type: onSuccess, payload: data });
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

export default orderDetails;
