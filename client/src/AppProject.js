import React, { useContext, useEffect, useState } from "react";

// import css
import "./css/StyleApp.css";

// import react-router-dom components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// import components
import PrivateRoute from "./components/PrivateRoute";

// import config
import { API, setAuthToken } from "./config/Api";

// import context
import { AppContext } from "./contexts/GlobalContext";

// import components
// import NavbarPublic from "./components/NavbarPublic";

// import Pages
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import HomeUser from "./pages/HomeUser";
import HomeUserExplore from "./pages/HomeUserExplore";
import Explore from "./pages/Explore";

// CheckTokenInLocalStorageIsExist
if (localStorage.token) {
  setAuthToken(localStorage.token);
  // console.log("DataToken: ", localStorage.token);
}
// EndCheckTokenInLocalStorageIsExist

export default function AppProject() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      // console.log("ResponLoadUser", response.data.status);
      // console.log("DataResponseAppPjoject: ", response.data);
      if (response.data.status == "Response Failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      dispatch({
        type: "USER_LOADED",
        payload: response.data.dataUser,
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/homeuser" component={HomeUser} />
          <PrivateRoute exact path="/explore" component={HomeUserExplore} />

          {/* PageNotFound */}
          <Route component={NotFound} />
          {/* PageNotFound */}
        </Switch>
      </Router>
    </div>
  );
}
