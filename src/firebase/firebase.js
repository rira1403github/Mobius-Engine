// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL8iq1Gous0ZJT1_aLf6QIz_iCXrMTvEY",
  authDomain: "esg-dashboard-688b2.firebaseapp.com",
  projectId: "esg-dashboard-688b2",
  storageBucket: "esg-dashboard-688b2.appspot.com",
  messagingSenderId: "994017891210",
  appId: "1:994017891210:web:126429215c69f90cfa2e73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth }