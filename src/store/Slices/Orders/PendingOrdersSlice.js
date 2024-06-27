import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetPendingOrder } from "../../../ApiRequests";

export const fetchPendingOrders = createAsyncThunk(
  "pending-orders",
  async () => {
    try {
      const response = await GetPendingOrder();
      console.log(response);
      return response.data.body.pendingOrders;
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
    builder.addCase(fetchPendingOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPendingOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchPendingOrders.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default PendingOrdersSlice.reducer;
