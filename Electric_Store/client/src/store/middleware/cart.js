import axios from "axios";
import { cartCallBegan } from "store/actions";

const cart =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== cartCallBegan.type) return next(action);

    const { url, qty, onSuccess, onError } = action.payload;

    next(action);

    try {
      const { data } = await axios.request({ url });
      const { name, image, currentPrice, countInStock, _id } = data;
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: {
            name,
            image,
            currentPrice,
            countInStock,
            product: _id,
            qty,
          },
        });
    } catch (error) {
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default cart;
