import { lazy } from "react";
import { Route } from "react-router";

const Profile = lazy(() => import("../Screens/User/Profile"));
const Order = lazy(() => import("../Screens/User/Order/Order"));
const Orders = lazy(() => import("../Screens/User/Orders/Orders"));
const Payment = lazy(() => import("../Screens/User/Payment/Payment"));
const UpdateProfile = lazy(() => import("../Screens/User/UpdateProfile"));

function UserRouter(props) {
  return [
    <Route key={21} path={"/order/:id"} exact={true} component={Order} />,
    <Route key={7} path={"/orders"} exact={true} component={Orders} />,
    <Route key={65} path={"/profile"} exact={true} component={Profile} />,
    <Route
      path={"/proceed-checkout/shipping-address"}
      exact={true}
      key={95}
      component={Payment}
    />,
    <Route
      key={13}
      path={"/proceed-checkout/place-order"}
      exact={true}
      component={Payment}
    />,
    <Route
      key={45}
      path={"/update-profile"}
      exact={true}
      component={UpdateProfile}
    />,
  ];
}

export default UserRouter;
