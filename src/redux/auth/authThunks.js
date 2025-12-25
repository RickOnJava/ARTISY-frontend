import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../services/authApi";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      return await loginUser(data);
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      return await registerUser(data);
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
