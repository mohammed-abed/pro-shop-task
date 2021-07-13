import { Route } from "react-router";
import { lazy } from "react";

const ProductPage = lazy(() => import("./Screens/Gust/Products/ProductPage"));
const HomeScreen = lazy(() => import("../Screens/Gust/HomeScreen/HomeScreen"));
const CartPage = lazy(() => import("../Screens/User/Cart/CartPage"));
const SearchScreen = lazy(() => import("../Screens/Gust/SearchScreen"));

function GuestRouter(props) {
  return [
    <Route key={1} path={"/"} exact={true} component={HomeScreen} />,
    <Route path={"/product/:id/:name"} exact={true} component={ProductPage} />,
    <Route key={3} path={"/cart"} exact={true} component={CartPage} />,
    <Route key={9374} path={"/search"} exact={true} component={SearchScreen} />,
  ];
}

export default GuestRouter;
