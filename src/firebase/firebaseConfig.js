import firebase from "firebase";

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyBt2yU_IHuSyxsAr3S8gTtF4RgOev7xRCw",
  authDomain: "flightmanagementsystem-b087d.firebaseapp.com",
  databaseURL: "https://flightmanagementsystem-b087d.firebaseio.com",
  projectId: "flightmanagementsystem-b087d",
  storageBucket: "flightmanagementsystem-b087d.appspot.com",
  messagingSenderId: "421159042782",
  appId: "1:421159042782:web:0902112ff48f92a3a10c4f",
  measurementId: "G-8FVTDCCHNN",
};
// Initialize Firebase
firebase.initializeApp(FirebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
