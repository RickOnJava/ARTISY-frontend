import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "./imageThunks";

const imageSlice = createSlice({
  name: "images",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {
    logout2: (state) => {
      state.list = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // FETCH IMAGES
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load images";
      });
  },
});

export const { logout2 } = imageSlice.actions;

export default imageSlice.reducer;
