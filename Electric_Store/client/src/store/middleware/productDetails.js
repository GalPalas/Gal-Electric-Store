import axios from "axios";
import * as actions from "store/actions";

const productsDetails =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.productsDetailsCallBegan.type)
      return next(action);

    const { url, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const { data } = await axios.request({ url });
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

export default productsDetails;
