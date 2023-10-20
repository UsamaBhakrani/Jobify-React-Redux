import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: null,
  },
  reducers: {},
});

export default userSlice.reducer;
