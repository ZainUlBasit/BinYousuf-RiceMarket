import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetApprovedRequestsApi, GetNewRequestsApi } from "../../ApiRequests";

export const fetchPedningOrders = createAsyncThunk(
  "pending-orders",
  async () => {
    try {
      const response = await GetApprovedRequestsApi();
      console.log(response);
      return response.data.body.approvedUsers;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const PendingOrdersSlice = createSlice({
  name: "pending-orders",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPedningOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPedningOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchPedningOrders.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default PendingOrdersSlice.reducer;
