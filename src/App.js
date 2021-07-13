import { MainContainer, SpinnerContainer } from "./App.Styles";
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
import SearchScreen from "./Screens/Gust/SearchScreen";
import { lazy } from "react";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";
import GuestRouter from "./Router/GuestRouter/GuestRouter";
import UserRouter from "./Router/UserRouter/UserRouter";
import AuthRouter from "./Router/AuthRouter/AuthRouter";
import NotFoundScreen from "./Screens/Gust/NotFoundScreen/NotFoundScreen";

function App() {
  // const localStr = JSON.parse(localStorage.getItem('user'))
  // const [user, setUser] = useState(localStr)
  const state = useSelector((state) => state);

  return (
    <MainContainer>
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          <NavBar />
          <Switch>
            {GuestRouter()}
            {/** Make it protected*/}
            {state.userDetails.user._id ? UserRouter() : AuthRouter()}
            <Route key={60} path={"*"}>
              <NotFoundScreen />
            </Route>
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </MainContainer>
  );
}

export default App;
