import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: null,
  },
});

export default userSlice.reducer;
