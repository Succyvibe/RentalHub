// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnVJXpn4BlZc-FIMASFO3uMP6Hev0S0pM",
  authDomain: "rentalhub-d29d0.firebaseapp.com",
  projectId: "rentalhub-d29d0",
  storageBucket: "rentalhub-d29d0.appspot.com",
  messagingSenderId: "402755623037",
  appId: "1:402755623037:web:d531c30073f6bc02647914",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
