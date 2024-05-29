import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const userData = localStorage.getItem("userData");
  const userType = localStorage.getItem("userType");
  const userToken = localStorage.getItem("userToken");

  if (userData && userType && userToken) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
