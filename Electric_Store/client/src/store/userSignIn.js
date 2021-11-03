import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import { userSignInCallBegan } from "store/actions";

const userSignIn = createSlice({
  name: "userSignIn",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    loading: false,
    error: false,
  },
  reducers: {
    userSignInRequest: (userSignIn, action) => {
      userSignIn.loading = true;
    },
    userSignInSuccess: (userSignIn, action) => {
      userSignIn.user = action.payload;
      userSignIn.loading = false;
    },
    userSignInFail: (userSignIn, action) => {
      userSignIn.error = action.payload;
      userSignIn.loading = false;
    },
    userSignInSignOut: (userSignIn, action) => {
      userSignIn.user = null;
    },
    userRegisterRequest: (userSignIn, action) => {
      userSignIn.loading = true;
    },
  },
});

const {
  userSignInRequest,
  userSignInSuccess,
  userSignInFail,
  userSignInSignOut,
} = userSignIn.actions;

export default userSignIn.reducer;

export const signIn = (email, password) => async (dispatch) => {
  return dispatch(
    userSignInCallBegan({
      url: "/api/users/signin",
      userEmail: email,
      userPassword: password,
      onStart: userSignInRequest.type,
      onSuccess: userSignInSuccess.type,
      onError: userSignInFail.type,
    })
  );
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartElectricItems");
  dispatch(userSignInSignOut());
};

export const getUserInfo = () =>
  createSelector(
    (state) => state.entities.userSignIn,
    (userSignIn) => userSignIn
  );
