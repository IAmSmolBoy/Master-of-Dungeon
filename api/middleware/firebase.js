// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app")
const { getAnalytics } = require("firebase/analytics")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhBklYKiafvcs5-f-4pkEOA5Vb3ty5Qu8",
    authDomain: "dragon-breath-tavern.firebaseapp.com",
    databaseURL: "https://dragon-breath-tavern-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dragon-breath-tavern",
    storageBucket: "dragon-breath-tavern.appspot.com",
    messagingSenderId: "397227589838",
    appId: "1:397227589838:web:e31b1b937a271a2925d09f",
    measurementId: "G-8D4PW3DP46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);