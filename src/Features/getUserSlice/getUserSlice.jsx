import { createSlice } from '@reduxjs/toolkit';

export const getUserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    errorMessage: "",
  },
  reducers: {
    fetchUser(state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    // fetchUserStart: state => state,
    fetchUserSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchUserFailure(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { fetchUser, fetchUserSuccess, fetchUserFailure } = getUserSlice.actions;
export default getUserSlice.reducer;
