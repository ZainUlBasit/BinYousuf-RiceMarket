// src/firebase-config.js
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken as getFcmToken,
  onMessage,
} from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe3-Ekcfqv0C3wMbk639B2M_sYDDBtV6I",
  authDomain: "riceapp-916a7.firebaseapp.com",
  projectId: "riceapp-916a7",
  storageBucket: "riceapp-916a7.appspot.com",
  messagingSenderId: "271665870076",
  appId: "1:271665870076:web:e08a7b92702239950d5379",
  measurementId: "G-FZW562PHQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Messaging
const messaging = getMessaging(app);

// Retrieve VAPID key from environment variables
// const { REACT_APP_VAPID_KEY } = process.env;
const publicKey =
  "BCQI0HHTjGN5ze1sLqg-Eu4BlbLF2K_4s9bzD0Z0Owl_SrpfSN8JTNLyk3yZkpiUw3g3TqHLIwNmQI6MnYcZLQQ";

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await getFcmToken(messaging, { vapidKey: publicKey });
    if (currentToken) {
      console.log(currentToken);
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
