import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ6xLbG1Ox96OTNfhNghnhBt-NYY6zflY",
  authDomain: "dopost-cc103.firebaseapp.com",
  projectId: "dopost-cc103",
  storageBucket: "dopost-cc103.firebasestorage.app",
  messagingSenderId: "102735728120",
  appId: "1:102735728120:web:6312a392114ed2c1d7da0d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);