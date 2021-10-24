import React from "react";
import {auth} from "../firebase";
import {useHistory} from "react-router";
import {ChatEngine} from "react-chat-engine";
import Navbar from "./Navbar";
import styles from "./Chats.module.css";

const Chats = () => {
  const history = useHistory();

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine height="calc(100vh - 50px)" projectID="875ce1dd-034a-4ef7-85ae-109ae5b02893" userName="." userSecret="." />
    </div>
  );
};

export default Chats;
