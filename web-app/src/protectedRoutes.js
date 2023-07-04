import React from "react";
import { Route, Navigate  } from "react-router-dom";

export default function ProtectedRoutes({
  auth,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        auth ? (
          <Component {...routeProps} />
        ) : (
          <Navigate 
            to={{
              pathname: "/",
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
}
