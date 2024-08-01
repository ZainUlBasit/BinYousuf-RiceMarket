import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DriverPendingOrderApi, GetAllDriversApi } from "../../../ApiRequests";

export const fetchDriversPending = createAsyncThunk(
  "fetch-drivers-pending",
  async () => {
    try {
      const response = await DriverPendingOrderApi();
      console.log(response);
      return response.data.body.pendingOrders;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const DriversPendingSlice = createSlice({
  name: "fetch-drivers-pending",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDriversPending.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDriversPending.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchDriversPending.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default DriversPendingSlice.reducer;
