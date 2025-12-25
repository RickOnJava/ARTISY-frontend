import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    loading: false,
  },
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    fetchUserFail: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFail } =
  userSlice.actions;

export default userSlice.reducer;
