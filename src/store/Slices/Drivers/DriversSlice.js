import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllDriversApi } from "../../../ApiRequests";

export const fetchDrivers = createAsyncThunk("fetch-drivers-all", async () => {
  try {
    const response = await GetAllDriversApi();
    console.log(response);
    return response.data.body.drivers;
  } catch (err) {
    console.log(err);
    return [];
  }
});

const DriversSlice = createSlice({
  name: "fetch-drivers-all",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDrivers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDrivers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchDrivers.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default DriversSlice.reducer;
