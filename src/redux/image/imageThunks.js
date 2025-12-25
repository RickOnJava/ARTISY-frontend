import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// export const fetchImages = createAsyncThunk(
//   "images/fetch",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await api.get("/images/random");
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const fetchImages = createAsyncThunk(
  "images/fetch",
  async ({ mood } = {}, { rejectWithValue }) => {
    try {
      const url = mood
        ? `/images?mood=${encodeURIComponent(mood)}`
        : `/images/random`;

      const res = await api.get(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to load images");
    }
  }
);

