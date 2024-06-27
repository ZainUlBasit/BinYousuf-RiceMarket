import { configureStore } from "@reduxjs/toolkit";
import NewRequestsSlice from "./Slices/NewRequestsSlice";
import ApprovedRequestsSlice from "./Slices/ApprovedRequestsSlice";
import RejectedRequestsSlice from "./Slices/RejectedRequestsSlice";
import BlockedRequestsSlice from "./Slices/BlockedRequestsSlice";
import CategorySlice from "./Slices/CategorySlice";
import ApprovedOrdersSlice from "./Slices/Orders/ApprovedOrdersSlice";
import PendingOrdersSlice from "./Slices/Orders/PendingOrdersSlice";
import DeliveredOrdersSlice from "./Slices/Orders/DeliveredOrdersSlice";
import CanceledOrdersSlice from "./Slices/Orders/CanceledOrdersSlice";
import DriversSlice from "./Slices/Drivers/DriversSlice";
import DriversPendingSlice from "./Slices/Drivers/DriversPendingSlice";
import DriversDeliveredSlice from "./Slices/Drivers/DriversDeliveredSlice";
import SubCategorySlice from "./Slices/Products/SubCategorySlice";
import CategoryItemSlice from "./Slices/Products/CategoryItemSlice";
import SubCategoryItemSlice from "./Slices/Products/SubCategoryItemSlice";

export const store = configureStore({
  reducer: {
    NewRequestsState: NewRequestsSlice,
    ApprovedUserState: ApprovedRequestsSlice,
    RejectedUserState: RejectedRequestsSlice,
    BlockedUserState: BlockedRequestsSlice,
    CategoryState: CategorySlice,
    // Order States
    ApprovedOrderState: ApprovedOrdersSlice,
    PendingOrderState: PendingOrdersSlice,
    DeliveredOrderState: DeliveredOrdersSlice,
    CanceledOrderState: CanceledOrdersSlice,
    // Driver State
    DriverState: DriversSlice,
    DriverPendingOrderState: DriversPendingSlice,
    DriverDeliveredOrderState: DriversDeliveredSlice,
    SubCategoryState: SubCategorySlice,
    CategoryItemState: CategoryItemSlice,
    SubCategoryItemState: SubCategoryItemSlice,
  },
});
