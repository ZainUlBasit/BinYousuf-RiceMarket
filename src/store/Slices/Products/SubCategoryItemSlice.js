import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DriverDeliveredOrderApi,
  DriverPendingOrderApi,
  GetAllDriversApi,
  GetSubCategoryByCatId,
  GetSubCategoryItemApi,
} from "../../../ApiRequests";

export const fetchSubCategoryItem = createAsyncThunk(
  "sub-category-items",
  async (id) => {
    try {
      const response = await GetSubCategoryItemApi(id);
      console.log(response);
      return response.data.body.subCatItems;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const SubCategoryItemSlice = createSlice({
  name: "sub-category-items",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubCategoryItem.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSubCategoryItem.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchSubCategoryItem.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default SubCategoryItemSlice.reducer;
