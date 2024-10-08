import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HomeWrapper from "./components/Wrapper/HomeWrapper";
import PageLoader from "./components/Loaders/PageLoader";
const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  let isMount = false;
  useEffect(() => {
    if (!isMount) {
      setInterval(() => {
        isMount = true;
        setLoading(false);
      }, 1000);
    }
  }, []);

  return loading ? (
    <div className="flex justify-center items-center w-full h-screen">
      <PageLoader />
    </div>
  ) : location.pathname === "/login" || location.pathname === "/" ? (
    <Outlet />
  ) : (
    <HomeWrapper>
      <div style={{ width: "calc(100% - 400px)" }}>
        <Outlet />
      </div>
    </HomeWrapper>
  );
};

export default Layout;
