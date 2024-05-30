import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetApprovedRequestsApi,
  GetNewRequestsApi,
  GetRejectedRequestsApi,
} from "../../ApiRequests";

export const fetchRejectedRequests = createAsyncThunk(
  "rejected-requests",
  async () => {
    try {
      const response = await GetRejectedRequestsApi();
      console.log(response);
      return response.data.body.rejectedUsers;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const RejectedRequestsSlice = createSlice({
  name: "rejected-requests",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRejectedRequests.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRejectedRequests.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchRejectedRequests.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default RejectedRequestsSlice.reducer;
