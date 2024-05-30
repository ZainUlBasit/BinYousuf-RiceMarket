import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetApprovedRequestsApi,
  GetBlockedUsersApi,
  GetNewRequestsApi,
  GetRejectedRequestsApi,
} from "../../ApiRequests";

export const fetchBlockedRequests = createAsyncThunk(
  "blocked-users",
  async () => {
    try {
      const response = await GetBlockedUsersApi();
      console.log(response);
      return response.data.body.blockedUsers;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const BlockedRequestsSlice = createSlice({
  name: "blocked-users",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlockedRequests.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBlockedRequests.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchBlockedRequests.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default BlockedRequestsSlice.reducer;
