import axios from "axios";
import { userSignInCallBegan } from "store/actions";

const userSignIn =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== userSignInCallBegan.type) return next(action);

    const { url, userEmail, userPassword, onStart, onSuccess, onError } =
      action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const { data } = await axios.post(url, {
        email: userEmail,
        password: userPassword,
      });

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
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

export default userSignIn;
