// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdK8szFmsK-Z2976UhlVYLN5a3hbiwhWA",
  authDomain: "netflixgpt-c9d3c.firebaseapp.com",
  projectId: "netflixgpt-c9d3c",
  storageBucket: "netflixgpt-c9d3c.appspot.com",
  messagingSenderId: "371665642915",
  appId: "1:371665642915:web:645ca6772b211eeabb2616",
  measurementId: "G-R38KLP38NZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
