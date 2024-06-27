import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteLogin = ({ element }) => {
  const userData = localStorage.getItem("userData");
  const userType = localStorage.getItem("userType");
  const userToken = localStorage.getItem("userToken");
  console.log("yrsd", userData, userToken, userType);

  if (userData && userType && userToken) {
    return <Navigate to="/new-requests" />;
  } else {
    return element;
  }
};

export default ProtectedRouteLogin;
