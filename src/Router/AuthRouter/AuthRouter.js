import { Route } from "react-router";
import { lazy } from "react";
import Signup from "../../Screens/Auth/Signup";

const Login = lazy(() => import("../../Screens/Auth/Login"));
const Signup = lazy(() => import("./Screens/Auth/Signup"));

function AuthRouter(props) {
  return [
    <Route
      key={456}
      path={"/login"}
      component={() => {
        return <Login />;
      }}
    />,
    <Route
      key={202}
      path={"/Signup"}
      component={() => {
        return <Signup />;
      }}
    />,
  ];
}

export default AuthRouter;
