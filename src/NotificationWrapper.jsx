import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SuccessToast } from "./components/ShowToast/ShowToast";

const NotificationWrapper = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const userToken = localStorage.getItem("userToken");

  const socket = io("https://riceapp.up.railway.app", {
    extraHeaders: {
      token: userToken,
      secretkey: "D%!@!@456FF214D^2$",
    },
  });

  useEffect(() => {
    socket.on("new_order", (notification) => {
      SuccessToast("Order Created");
      console.log(notification);
    });
    socket.on("order_delivered", (notification) => {
      SuccessToast("Order Delivered");
      console.log(notification);
    });
    socket.on("order_canceled", (notification) => {
      SuccessToast("Order Canceled");
      console.log(notification);
    });
    socket.on("order_approved", (notification) => {
      SuccessToast("Order Approved");
      console.log(notification);
    });

    return () => {
      socket.off("new_order");
      socket.off("order_delivered");
      socket.off("order_canceled");
      socket.off("order_approved");
    };
  }, [socket]);

  return (
    <>
      {children}
      {notifications.map((notification, index) => (
        <div key={index}>{notification.message}</div>
      ))}
    </>
  );
};

export default NotificationWrapper;
