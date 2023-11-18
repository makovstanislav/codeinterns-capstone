import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth'
import { getDatabase } from "firebase-admin/database";
import { credential } from 'firebase-admin'; 

var serviceAccount = require("firebaseServiceAccountKey.json");

// Initialize App
let app

if (!getApps().length) {
    app = initializeApp({
        credential: credential.cert(serviceAccount),
        databaseURL: 'https://codeinterns-933fb-default-rtdb.europe-west1.firebasedatabase.app/'
    })
} 

// Initialize Auth
const auth = getAuth(app)

// Initialize Realtime Database
const db = getDatabase(app);




export {auth, db}





