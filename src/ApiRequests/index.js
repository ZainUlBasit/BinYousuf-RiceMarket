import axios from "axios";
import { BASE_URL } from "../utils/config";

export const userToken = localStorage.getItem("userToken");
export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
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
