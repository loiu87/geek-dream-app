import React from "react";
import { BrowserRouter as BRouter, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import LogIn from "../routes/LogIn";

function Router() {
  return (
    <BRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LogIn} />
      </Switch>
    </BRouter>
  );
}

export default Router;
