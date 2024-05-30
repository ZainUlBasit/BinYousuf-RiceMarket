import axios from "axios";
import { BASE_URL } from "../utils/config";

export const userToken = localStorage.getItem("userToken");
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
  },
});

export const SignInApi = (data) => api.post("/accounts/signin/web", data);

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
