import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCanceledOrder, GetDeliveredOrderApi } from "../../../ApiRequests";

export const fetchCanceledOrders = createAsyncThunk(
  "canceled-orders",
  async () => {
    try {
      const response = await GetCanceledOrder();
      console.log(response);
      return response.data.body.canceledOrders;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const CanceledOrdersSlice = createSlice({
  name: "canceled-orders",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCanceledOrders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCanceledOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCanceledOrders.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default CanceledOrdersSlice.reducer;
