import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import App from "./components/App";
import AppliedRoute from "./components/AppliedRoute";


export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Login} props={childProps} />
    <AppliedRoute path="/emotions" exact component={App} props={childProps} />
  </Switch>;