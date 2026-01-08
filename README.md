

resert doanh thu

localStorage.removeItem("chill_invoices");

cấp tài khoản admin 

localStorage.setItem("chill_users", JSON.stringify([
  {
    username: "admin",
    password: "admin123",
    role: "admin"
  }
]));



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPiwH3zOOIwvq3wYhdtISp4NoSbMmFQbY",
  authDomain: "chill-house-cafe.firebaseapp.com",
  databaseURL: "https://chill-house-cafe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chill-house-cafe",
  storageBucket: "chill-house-cafe.firebasestorage.app",
  messagingSenderId: "662836837448",
  appId: "1:662836837448:web:7420022b02b0b9b3c06c7d",
  measurementId: "G-KTMJFBFDRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);