import { createSlice } from "@reduxjs/toolkit";
import { addLead, fetchLeads } from "./leadsSlice";
import { registerUser, loginUser, logoutUser } from "./authSlice";

const initialState = {};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    loadError: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLead.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.errors = action.payload;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.errors = action.payload;
      });
  },
});

export const { loadError } = errorSlice.actions;

export default errorSlice.reducer;
