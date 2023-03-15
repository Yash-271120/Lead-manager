import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  leads: [],
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.leads = action.payload;
      })
      .addCase(deleteLead.fulfilled, (state, action) => {
        state.leads = state.leads.filter((lead) => lead.id !== action.payload);
      })
      .addCase(addLead.fulfilled, (state, action) => {
        state.leads.push(action.payload);
      });
  },
});

// fetch leads
export const fetchLeads = createAsyncThunk(
  "leads/fetchLeads",
  async (args, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const res = await axios.get("/api/leads/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${state.auth.token}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// add a lead
export const addLead = createAsyncThunk(
  "leads/addLead",
  async (lead, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const res = await axios.post("/api/leads/", lead, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${state.auth.token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// delete a lead
export const deleteLead = createAsyncThunk("leads/deleteLead", async (id) => {
  try {
    const res = await axios.delete(`/api/leads/${id}/`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

// export const {  } = leadsSlice.actions;

export default leadsSlice.reducer;
