import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home/Home";
import NewRequest from "./pages/Home/NewRequest";
import RejectedRequest from "./pages/Home/RejectedRequest";
import BlockedRequest from "./pages/Home/BlockedRequest";
import Pending from "./pages/Orders/Pending";
import Approved from "./pages/Orders/Approved";
import Delivered from "./pages/Orders/Delivered";
import Canceled from "./pages/Orders/Canceled";
import Drivers from "./pages/Drivers";
import Products from "./pages/Products";
import ApprovedRequest from "./pages/Home/ApprovedRequest";
import UserDetail from "./components/Cards/UserDetail";
import Previous from "./pages/Orders/Previous";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login/Login";
import ProtectedRouteLogin from "./components/ProtectedRoute/ProtectedRouteLogin";
import DriverList from "./pages/Drivers/DriverList";
import Ongoing from "./pages/Drivers/Ongoing";
import DeliveredDriver from "./pages/Drivers/DeliveredDriver";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRouteLogin element={<App />} />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/new-requests",
    element: <ProtectedRoute element={<NewRequest />} />,
  },
  {
    path: "/rejected-requests",
    element: <ProtectedRoute element={<RejectedRequest />} />,
  },
  {
    path: "/approved-requests",
    element: <ProtectedRoute element={<ApprovedRequest />} />,
  },
  {
    path: "/blocked-requests",
    element: <ProtectedRoute element={<BlockedRequest />} />,
  },
  {
    path: "/previous-orders/:id",
    element: <ProtectedRoute element={<Previous />} />,
  },
  {
    path: "/pending-orders",
    element: <ProtectedRoute element={<Pending />} />,
  },
  {
    path: "/approved-orders",
    element: <ProtectedRoute element={<Approved />} />,
  },
  {
    path: "/delivered-orders",
    element: <ProtectedRoute element={<Delivered />} />,
  },
  {
    path: "/canceled-orders",
    element: <ProtectedRoute element={<Canceled />} />,
  },
  {
    path: "/driver-all",
    element: <ProtectedRoute element={<DriverList />} />,
  },
  {
    path: "/driver-ongoing-orders",
    element: <ProtectedRoute element={<Ongoing />} />,
  },
  {
    path: "/driver-delivered-orders",
    element: <ProtectedRoute element={<DeliveredDriver />} />,
  },
  {
    path: "/products",
    element: <ProtectedRoute element={<Products />} />,
  },
  {
    path: "/user_detail/:id",
    element: <ProtectedRoute element={<UserDetail />} />,
  },
  {
    path: "/login",
    element: <Login />, // Assuming you have a Login component
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
