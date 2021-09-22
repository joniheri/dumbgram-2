import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import components
import SpinnerBorder from "./SpinnerBorder";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [state] = useContext(AppContext);
  const { isLoading, isLogin } = state;

  // console.log("DataState: ", state);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isLoading ? (
            <SpinnerBorder />
          ) : isLogin === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </div>
  );
}
