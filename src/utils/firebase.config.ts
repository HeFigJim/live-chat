import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJGtIN_YOCMTlCW3SZ3xeyMxBcpU-pasA",
  authDomain: "live-chat-application-56609.firebaseapp.com",
  projectId: "live-chat-application-56609",
  storageBucket: "live-chat-application-56609.appspot.com",
  messagingSenderId: "831029587580",
  appId: "1:831029587580:web:4073b304fd31658d8e23f9",
  measurementId: "G-N620K39CZ8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
