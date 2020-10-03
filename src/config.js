const firebase = require("firebase");

firebase.initializeApp({
  apiKey: "AIzaSyDV3uwm6YzCVit0Bn4FEfN5Ko0Z81XPF24",
  authDomain: "nasahack-18440.firebaseapp.com",
  databaseURL: "https://nasahack-18440.firebaseio.com",
  projectId: "nasahack-18440",
  storageBucket: "nasahack-18440.appspot.com",
  messagingSenderId: "730880143922",
  appId: "1:730880143922:web:7a6ad465a5a6d7da16822b",
  measurementId: "G-P4CS0BFPRG",
});

export const db = firebase.firestore();
export const auth = firebase.auth();