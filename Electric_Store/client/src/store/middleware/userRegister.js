import axios from "axios";
import { signIn } from "store/userSignIn";
import { userRegisterCallBegan } from "store/actions";

const userRegister =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== userRegisterCallBegan.type) return next(action);

    const {
      url,
      userName,
      userEmail,
      userPassword,
      onStart,
      onSuccess,
      onError,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const { data } = await axios.post(url, {
        name: userName,
        email: userEmail,
        password: userPassword,
      });

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: data });
        dispatch(signIn(userEmail, userPassword));
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

export default userRegister;
