import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetApprovedOrder, GetApprovedRequestsApi } from "../../../ApiRequests";

export const fetchApprovedOrders = createAsyncThunk(
  "approved-orders",
  async () => {
    try {
      const response = await GetApprovedOrder();
      console.log(response);
      return response.data.body.approvedOrders;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const ApprovedOrdersSlice = createSlice({
  name: "approved-orders",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApprovedOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchApprovedOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchApprovedOrders.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default ApprovedOrdersSlice.reducer;
