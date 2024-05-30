import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetNewRequestsApi } from "../../ApiRequests";

export const fetchNewRequests = createAsyncThunk("new-request", async () => {
  try {
    const response = await GetNewRequestsApi();
    console.log(response);
    return response.data.body.newRequests;
  } catch (err) {
    console.log(err);
    return [];
  }
});

const NewRequestsSlice = createSlice({
  name: "new-requests",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewRequests.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchNewRequests.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchNewRequests.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default NewRequestsSlice.reducer;
