import axios from "axios";
import { BASE_URL } from "../utils/config";

export const userToken = localStorage.getItem("userToken");
console.log(userToken);
export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: userToken,
  },
});

export const apiForImage = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: userToken,
  },
});

export const SignInApi = (data) => api.post("/accounts/signin/web", data);

// Noticfications Requests
export const GetNotifcaitionAllApi = () => api.get("/notifications/admin/all");

// Request API calls
export const GetNewRequestsApi = () => api.get("/accounts/new_req");
export const GetApprovedRequestsApi = () => api.get("/accounts/get_approved");
export const GetRejectedRequestsApi = () => api.get("/accounts/get_rejected");
export const GetBlockedUsersApi = () => api.get("/accounts/get_blocked");

export const BlockUserApi = (payload) => api.patch("/accounts/block", payload);

export const VerifyRequestsApi = (payload) =>
  api.post("/accounts/verify", payload);
export const RejectRequestsApi = (payload) =>
  api.post("/accounts/reject", payload);

// Categories
export const GetCategoriesApi = () => api.get("/category/all");
export const CreateCategoryApi = (payload) =>
  apiForImage.post("/category/create", payload);
export const DeleteCategoryApi = (id) => api.delete("/category/delete/" + id);
export const UpdateCategoryApi = (data) =>
  apiForImage.put("/category/update/" + data.id, data.payload);
export const CreateCategoryItemApi = (payload) =>
  apiForImage.post("/category/categoryitem", payload);
export const GetCategoryItemApi = (id) => api.get("/category/item/list/" + id);
export const UpdateCategoryItemApi = (id, payload) =>
  apiForImage.put("/category/item/update/" + id, payload);

//  Sub Categories
export const CreateSubCategoryApi = (payload) =>
  apiForImage.post("/subcategory/create", payload);
export const GetSubCategoryByCatId = (id) => api.get("/subcategory/list/" + id);
export const GetSubCategoryApi = () => api.get("/subcategory/all");
export const DeleteSubCategoryApi = (id) =>
  api.delete("/subcategory/delete/" + id);
export const CreateSubCategoryItemApi = (payload) =>
  apiForImage.post("/subcategory/subcategoryitem", payload);
export const DeleteSubCategoryItemApi = (id) =>
  api.delete("/subcategory/item/delete/" + id);
export const UpdateSubCategoryItemApi = (id, payload) =>
  apiForImage.put("/subcategory/item/update/" + id, payload);
export const GetSubCategoryItemApi = (id) =>
  api.get("/subcategory/item/list/" + id);
export const UpdateSubCategoryApi = (data) =>
  apiForImage.put("/subcategory/update/" + data.id, data.payload);

// orders
export const GetApprovedOrder = () => api.post("/orders/approved");
export const GetPendingOrder = () => api.post("/orders/pending");
export const GetDeliveredOrderApi = () => api.post("/orders/delivered");
export const GetCanceledOrder = () => api.post("/orders/canceled");
export const CancelOrderApi = (payload) => api.put("orders/cancel", payload);

// driver
export const GetAllDriversApi = () => api.get("/drivers/all");
export const UpdateDriversApi = (payload) =>
  apiForImage.patch("/accounts/update", payload);

export const DriverPendingOrderApi = () => api.get("/orders/driver/pending");
export const DriverDeliveredOrderApi = () =>
  api.get("/orders/driver/delivered");
