import axios from "axios";
import { cartCallBegan } from "store/actions";

const cart =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== cartCallBegan.type) return next(action);

    const { url, qty, onSuccess } = action.payload;

    next(action);

    try {
      const { data } = await axios.request({ url });
      const { name, image, price, countInStock, _id } = data;
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: {
            name,
            image,
            price,
            countInStock,
            product: _id,
            qty,
          },
        });
    } catch (err) {
      console.log(err.message);
    }
  };

export default cart;
