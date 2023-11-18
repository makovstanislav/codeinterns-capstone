import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtGNPQ_nrXZ0WEfNwbEOQ4rcYKc24U9zg",
  authDomain: "codeinterns-933fb.firebaseapp.com",
  projectId: "codeinterns-933fb",
  storageBucket: "codeinterns-933fb.appspot.com",
  messagingSenderId: "510124764228",
  appId: "1:510124764228:web:6a69e8443051b80e326011",
  measurementId: "G-VLJ19NBN8D"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}