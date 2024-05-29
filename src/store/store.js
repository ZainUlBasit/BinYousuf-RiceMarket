import { configureStore } from "@reduxjs/toolkit";
import NewRequestsSlice from "./Slices/NewRequestsSlice";

export const store = configureStore({
  reducer: { NewRequestsState: NewRequestsSlice },
});
