// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBe3-Ekcfqv0C3wMbk639B2M_sYDDBtV6I",
  authDomain: "riceapp-916a7.firebaseapp.com",
  projectId: "riceapp-916a7",
  storageBucket: "riceapp-916a7.appspot.com",
  messagingSenderId: "271665870076",
  appId: "1:271665870076:web:e08a7b92702239950d5379",
  measurementId: "G-FZW562PHQ7",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
