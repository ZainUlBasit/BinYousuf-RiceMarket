import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeWrapper from "./components/Wrapper/HomeWrapper";
const LayoutAuth = () => {
  const [loading, setLoading] = useState(true);
  let isMount = false;
  useEffect(() => {
    if (!isMount) {
      setInterval(() => {
        isMount = true;
        setLoading(false);
      }, 1000);
    }
  }, []);

  return loading ? <div>Loader...</div> : <Outlet />;
};

export default LayoutAuth;
