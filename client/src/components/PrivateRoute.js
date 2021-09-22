import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import components
import SpinnerBorder from "./SpinnerBorder";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [state] = useContext(AppContext);
  const { isLoading, isLogin } = state;

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isLoading ? (
            <SpinnerBorder />
          ) : isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </div>
  );
}
