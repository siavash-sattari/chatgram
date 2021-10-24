import React from "react";

import styles from "./Login.module.css";
import google from "../assets/google.svg";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to Chatgram 🙂</h2>
        <div className={styles.button}>
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
}
