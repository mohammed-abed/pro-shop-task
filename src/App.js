import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import RecentlyViewedSection from "./Screens/Gust/HomeScreen/RecentlyViewedSection";
import Login from "./Screens/Auth/Login";
import { Route, Switch } from "react-router";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import { useSelector } from "react-redux";
import Signup from "./Screens/Auth/Signup";
import CartPage from "./Screens/User/Cart/CartPage";
import ProductPage from "./Screens/Gust/Products/ProductPage";
import UpdateProfile from "./Screens/User/UpdateProfile";
import Profile from "./Screens/User/Profile";
import { Fragment } from "react";
import Payment from "./Screens/User/Payment/Payment";

function App() {
  // const localStr = JSON.parse(localStorage.getItem('user'))
  // const [user, setUser] = useState(localStr)
  const state = useSelector((state) => state);

  return (
    <MainContainer>
      <NavBar />
      <Switch>
        <Route path={"/profile"} exact={true} component={Profile} />
        <Route
          path={"/proceed-checkout/shipping-address"}
          exact={true}
          component={Payment}
        />
        <Route
          path={"/proceed-checkout/place-order"}
          exact={true}
          component={Payment}
        />
        <Route path={"/cart"} exact={true} component={CartPage} />
        <Route path={"/"} exact={true} component={HomeScreen} />
        <Route
          path={"/update-profile"}
          exact={true}
          component={UpdateProfile}
        />{" "}
        <Route
          path={"/product/:id/:name"}
          exact={true}
          component={ProductPage}
        />
        {state.userDetails.user._id ? (
          <>
            <Route path={"/cart"} exact={true} component={CartPage} />
            <Route path={"/profile"} exact={true} component={Profile} />
            <Route
              path={"/proceed-checkout/shipping-address"}
              exact={true}
              component={Payment}
            />
            <Route
              path={"/proceed-checkout/place-order"}
              exact={true}
              component={Payment}
            />
            <Route
              path={"/update-profile"}
              exact={true}
              component={UpdateProfile}
            />
          </>
        ) : (
          <Fragment>
            <Route
              path={"/login"}
              component={() => {
                return <Login />;
              }}
            />
            <Route
              path={"/Signup"}
              component={() => {
                return <Signup />;
              }}
            />
          </Fragment>
        )}
      </Switch>
    </MainContainer>
  );
}

export default App;
