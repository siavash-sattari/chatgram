import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./Components/Login";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}
