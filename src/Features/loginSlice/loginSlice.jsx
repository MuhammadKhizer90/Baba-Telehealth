import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    errorMessage: "",
    token: null,
  },
  reducers: {
    userLogin(state) {
      state.isLoading = true;
      state.isError = false;
    },
    userLoginSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
      state.token = action.payload.token;
    },
    userLoginFailure(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    userLogout(state) {
      state.token = null;
    },
  },
});

export const {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userLogout, 
} = loginSlice.actions;

export default loginSlice.reducer;
