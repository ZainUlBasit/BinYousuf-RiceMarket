import { configureStore } from "@reduxjs/toolkit";
import NewRequestsSlice from "./Slices/NewRequestsSlice";
import ApprovedRequestsSlice from "./Slices/ApprovedRequestsSlice";
import RejectedRequestsSlice from "./Slices/RejectedRequestsSlice";
import BlockedRequestsSlice from "./Slices/BlockedRequestsSlice";
import CategorySlice from "./Slices/CategorySlice";

export const store = configureStore({
  reducer: {
    NewRequestsState: NewRequestsSlice,
    ApprovedUserState: ApprovedRequestsSlice,
    RejectedUserState: RejectedRequestsSlice,
    BlockedUserState: BlockedRequestsSlice,
    CategoryState: CategorySlice,
  },
});
