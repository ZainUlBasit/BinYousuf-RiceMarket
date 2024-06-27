import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DriverDeliveredOrderApi,
  DriverPendingOrderApi,
  GetAllDriversApi,
  GetSubCategoryApi,
  GetSubCategoryByCatId,
} from "../../../ApiRequests";

export const fetchSubCategories = createAsyncThunk(
  "fetch-sub-categories",
  async (id) => {
    console.log(id);
    try {
      let response;
      if (id) response = await GetSubCategoryByCatId(id);
      else response = await GetSubCategoryApi();
      console.log(response);
      return response.data.body.subCategories;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

const SubCategorySlice = createSlice({
  name: "fetch-sub-categories",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSubCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchSubCategories.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default SubCategorySlice.reducer;
