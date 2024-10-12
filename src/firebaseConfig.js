import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4zbWlZb5kGqsEIhpjc-9VvevbDtoFjKE",
    authDomain: "courses-frontend-a4.firebaseapp.com",
    projectId: "courses-frontend-a4",
    storageBucket: "courses-frontend-a4.appspot.com",
    messagingSenderId: "716828849415",
    appId: "1:716828849415:web:c4eb055df31b7689a081a2"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { app };

