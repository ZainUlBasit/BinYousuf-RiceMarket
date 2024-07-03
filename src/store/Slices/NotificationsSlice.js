import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetApprovedRequestsApi,
  GetNewRequestsApi,
  GetNotifcaitionAllApi,
} from "../../ApiRequests";

export const fetchNotifcations = createAsyncThunk("notifications", async () => {
  try {
    const response = await GetApprovedRequestsApi();
    console.log(response);
    return response.data.body.approvedUsers;
  } catch (err) {
    console.log(err);
    return [];
  }
});
export const fetchNotifcationsAll = createAsyncThunk(
  "notifications",
  async () => {
    try {
      const response = await GetNotifcaitionAllApi();
      console.log(response);
      return response.data.body.notifications;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const NotificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifcations.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchNotifcations.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchNotifcations.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default NotificationsSlice.reducer;
