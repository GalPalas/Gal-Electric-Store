import axios from "axios";
import * as actions from "store/api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const { data } = await axios.get("/api/products");
      // dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: data });
    } catch (error) {
      // dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
