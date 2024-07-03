// notificationHelpers.js
export const toastNotification = ({ title, description, status }) => {
  // Implement your toast notification logic
  console.log(`Toast Notification: ${title} - ${description} - ${status}`);
};

export const sendNativeNotification = ({ title, body }) => {
  // Implement your native notification logic
  console.log(`Native Notification: ${title} - ${body}`);
};

export const register = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Error registering service worker:", error);
      });
  }
};
