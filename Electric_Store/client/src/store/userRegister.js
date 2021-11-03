import { createSelector } from "reselect";
import { createSlice } from "@reduxjs/toolkit";
import { userRegisterCallBegan } from "store/actions";

const userRegister = createSlice({
  name: "userRegister",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    loading: false,
    error: false,
  },
  reducers: {
    userRegisterRequest: (userRegister, action) => {
      userRegister.loading = true;
    },
    userRegisterSuccess: (userRegister, action) => {
      userRegister.user = action.payload;
      userRegister.loading = false;
    },
    userRegisterFail: (userRegister, action) => {
      userRegister.error = action.payload;
      userRegister.loading = false;
    },
  },
});

const { userRegisterRequest, userRegisterSuccess, userRegisterFail } =
  userRegister.actions;

export default userRegister.reducer;

export const register = (name, email, password) => async (dispatch) => {
  return dispatch(
    userRegisterCallBegan({
      url: "/api/users/register",
      userName: name,
      userEmail: email,
      userPassword: password,
      onStart: userRegisterRequest.type,
      onSuccess: userRegisterSuccess.type,
      onError: userRegisterFail.type,
    })
  );
};

export const getUserRegisterInfo = () =>
  createSelector(
    (state) => state.entities.userRegister,
    (userRegister) => userRegister
  );
