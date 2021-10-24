/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {auth} from "../firebase";

export const AuthContext = React.createContext();

export default function AuthContextProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push("/chats");
    });
  }, [user, history]);

  return <AuthContext.Provider value={user}>{!loading && children}</AuthContext.Provider>;
}
