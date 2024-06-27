import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetDeliveredOrderApi } from "../../../ApiRequests";

export const fetchDeliveredOrders = createAsyncThunk(
  "delivered-orders",
  async () => {
    try {
      const response = await GetDeliveredOrderApi();
      console.log(response);
      return response.data.body.deliveredOrders;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const DeliveredOrdersSlice = createSlice({
  name: "delivered-orders",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDeliveredOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDeliveredOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchDeliveredOrders.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default DeliveredOrdersSlice.reducer;
