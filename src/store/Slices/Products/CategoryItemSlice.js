import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DriverDeliveredOrderApi,
  DriverPendingOrderApi,
  GetAllDriversApi,
  GetCategoryItemApi,
  GetSubCategoryByCatId,
} from "../../../ApiRequests";

export const fetchCategoryItem = createAsyncThunk(
  "fetch-category-items",
  async (id) => {
    try {
      const response = await GetCategoryItemApi(id);
      console.log(response);
      return response.data.body.CatItems;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const CategoryItemSlice = createSlice({
  name: "fetch-category-items",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryItem.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryItem.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCategoryItem.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default CategoryItemSlice.reducer;
