import React from "react";
import { Route, Switch } from "react-router-dom";
import LogIn from "../routes/LogIn";
import RawFileUploadContainer from "../routes/RawFileUpload";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={RawFileUploadContainer} />
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
