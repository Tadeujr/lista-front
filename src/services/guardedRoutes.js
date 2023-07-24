import React from "react";
import { Route, Navigate } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    element={auth === true ? <Component {...rest} /> : <Navigate to="/" />}
  />
);

export default GuardedRoute;