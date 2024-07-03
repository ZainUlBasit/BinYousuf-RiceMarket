import React, { useEffect, useState } from "react";
import { getToken, onMessageListener } from "./firebaseInit";

const NotificationWrapper = ({ children }) => {
  const [isTokenFound, setTokenFound] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    getToken(setTokenFound);
  }, []);

  onMessageListener()
    .then((payload) => {
      //   setNotification({
      //     title: payload.notification.title,
      //     body: payload.notification.body,
      //   });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));

  return <>{children}</>;
};

export default NotificationWrapper;
