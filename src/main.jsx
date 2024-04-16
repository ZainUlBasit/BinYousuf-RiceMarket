import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/new-requests",
    element: <NewRequest />,
  },
  {
    path: "/rejected-requests",
    element: <RejectedRequest />,
  },
  {
    path: "/approved-requests",
    element: <ApprovedRequest />,
  },
  {
    path: "/blocked-requests",
    element: <BlockedRequest />,
  },
  {
    path: "/pending-orders",
    element: <Pending />,
  },
  {
    path: "/approved-orders",
    element: <Approved />,
  },
  {
    path: "/delivered-orders",
    element: <Delivered />,
  },
  {
    path: "/canceled-orders",
    element: <Canceled />,
  },
  {
    path: "/drivers",
    element: <Drivers />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
