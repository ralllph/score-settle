// NOTE ALL THIS WAS COPIED FROM FIREBASE ITE AFTER CREATING APP THERE


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: "score-settle.firebaseapp.com",
projectId: "score-settle",
storageBucket: "score-settle.appspot.com",
messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID ,
appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// documentation says const auth = getAuth(app) givees you access to the service
//export auth cuz you need it else where too 
export const auth = getAuth(app);
export default app