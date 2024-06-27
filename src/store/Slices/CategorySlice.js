import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GetApprovedRequestsApi,
  GetCategoriesApi,
  GetNewRequestsApi,
  GetRejectedRequestsApi,
} from "../../ApiRequests";

export const fetchCategory = createAsyncThunk("category", async () => {
  try {
    const response = await GetCategoriesApi();
    console.log(response.data.body.categories);
    return response.data.body.categories;
  } catch (err) {
    console.log(err);
    return [];
  }
});

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default CategorySlice.reducer;
