// firebase.js
import { initializeApp } from "@firebase/app";
import { getMessaging, getToken, onMessage } from "@firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBe3-Ekcfqv0C3wMbk639B2M_sYDDBtV6I",
  authDomain: "riceapp-916a7.firebaseapp.com",
  projectId: "riceapp-916a7",
  storageBucket: "riceapp-916a7.appspot.com",
  messagingSenderId: "271665870076",
  appId: "1:271665870076:web:e08a7b92702239950d5379",
  measurementId: "G-FZW562PHQ7",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const setupNotifications = async () => {
  try {
    // Register the service worker
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );

    // Request permission for notifications
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");
      // Get the FCM token
      const token = await getToken(messaging, {
        serviceWorkerRegistration: registration,
      });
      console.log("FCM Token:", token);
    } else {
      console.log("Notification permission denied.");
    }

    // Handle foreground notifications
    onMessage(messaging, (payload) => {
      console.log("Foreground Message:", payload);
      // Handle the notification or update your UI
    });
  } catch (error) {
    console.error("Error setting up notifications:", error);
  }
};

export { messaging, setupNotifications };
