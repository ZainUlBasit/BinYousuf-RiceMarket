import React, { useEffect } from "react";
import useVisibilityChange from "./components/CustomHook/useVisibilityChange";
import { setupNotifications } from "./firebase";
import {
  sendNativeNotification,
  toastNotification,
} from "./utils/NotificationHelper";

const NotificationWrapper = ({ children }) => {
  const isForeground = useVisibilityChange();
  useEffect(() => {
    setupNotifications((message) => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title,
          description: body,
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title,
          body,
        });
      }
    });
  }, []);
  return <>{children}</>;
};

export default NotificationWrapper;
