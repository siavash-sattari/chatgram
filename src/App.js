import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import Chats from "./Components/Chats";
import AuthContextProvider from "./contexts/AuthContextProvider";

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}
