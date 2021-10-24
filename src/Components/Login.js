import React from "react";
import firebase from "firebase/app";
import {auth} from "../firebase";

// styles
import styles from "./Login.module.css";

// Icon
import google from "../assets/google.svg";

export default function Login() {
  const signIn = () => {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to Chatgram 🙂</h2>
        <div className={styles.button} onClick={signIn}>
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
}
