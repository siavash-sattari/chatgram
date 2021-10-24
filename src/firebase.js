import firebase from "firebase/app";
 
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyA0KyWbAgHZQ76O6hi7oQgGj55yGDp9SKE",
  authDomain: "chatgram-c41d1.firebaseapp.com",
  projectId: "chatgram-c41d1",
  storageBucket: "chatgram-c41d1.appspot.com",
  messagingSenderId: "904821263237",
  appId: "1:904821263237:web:5d37ef8865be01e58c92ec",
}).auth();
