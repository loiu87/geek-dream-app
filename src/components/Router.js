/* eslint-disable arrow-body-style */
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import RouteControler from "../routes/Analizer";
import AuthContainer from "../routes/Auth";

const LoggedInRoutes = () => {
  return (
    <>
      <Route path="/" exact component={RouteControler} />
    </>
  );
};

const LoggedOutRoutes = () => {
  return (
    <>
      <Route path="/" exact component={AuthContainer} />
    </>
  );
};

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

export default AppRouter;
