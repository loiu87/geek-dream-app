import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteControler from "../routes/Analizer";
import LogIn from "../routes/Auth/LogIn";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={RouteControler} />
    </Switch>
  );
};

const LoggedOutRoutes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LogIn} />
    </Switch>
  );
};

const AppRouter = ({ isLoggedIn }) => {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default AppRouter;
