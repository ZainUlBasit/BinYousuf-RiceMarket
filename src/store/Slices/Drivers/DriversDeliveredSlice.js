import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DriverDeliveredOrderApi,
  DriverPendingOrderApi,
  GetAllDriversApi,
} from "../../../ApiRequests";

export const fetchDriverDelivered = createAsyncThunk(
  "fetch-drivers-delivered",
  async () => {
    try {
      const response = await DriverDeliveredOrderApi();
      console.log(response);
      return response.data.body.deliveredOrders;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const DriversDeliveredSlice = createSlice({
  name: "fetch-drivers-delivered",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDriverDelivered.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDriverDelivered.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchDriverDelivered.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default DriversDeliveredSlice.reducer;
