import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp2JR0Vn6_9C2-76iYNUbny19HDDS5YJA",
  authDomain: "mobile-services-f7a1b.firebaseapp.com",
  projectId: "mobile-services-f7a1b",
  storageBucket: "mobile-services-f7a1b.appspot.com",
  messagingSenderId: "740060847841",
  appId: "1:740060847841:web:de440a7a9574bbbd1e21a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;