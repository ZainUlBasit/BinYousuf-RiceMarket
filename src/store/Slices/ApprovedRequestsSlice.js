import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetApprovedRequestsApi, GetNewRequestsApi } from "../../ApiRequests";

export const fetchApprovedRequests = createAsyncThunk(
  "approved-requests",
  async () => {
    try {
      const response = await GetApprovedRequestsApi();
      console.log(response);
      return response.data.body.approvedUsers.filter((dt) => !dt.is_blocked);
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const ApprovedRequestsSlice = createSlice({
  name: "approved-requests",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApprovedRequests.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchApprovedRequests.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchApprovedRequests.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default ApprovedRequestsSlice.reducer;
