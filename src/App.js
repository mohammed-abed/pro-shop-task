import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import FeaturedProductPage from "./Screens/Gust/HomeScreen/FeaturedProductPage";
import RecentlyViewedSection from "./Screens/Gust/HomeScreen/RecentlyViewedSection";
import Payment from "./Screens/User/Payment";
import ShoppingCartPage from "./Screens/User/ShoppingCartPage";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";
import Profile from "./Screens/User/Profile";
import PlaceOrder from "./Components/Order/PlaceOrder";
import ReviewOrder from "./Components/Order/ReviewOrder";
import { Route, Switch } from "react-router";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import { useSelector } from "react-redux";

function App() {
  // const localStr = JSON.parse(localStorage.getItem('user'))
  // const [user, setUser] = useState(localStr)
  const state = useSelector((state) => state);

  return (
    <MainContainer>
      {/*  user={user} setUser={setUser} */}
      <NavBar />
      <Switch>
        <Route path={"/"} component={HomeScreen} />
        {
          state.userDetails.user._id ? null : (
            <Route exact={true} path={"/login"} component={Login} />
          )
          // ()=>{
          //   return <Login  />/*setUser={setUser}*/
          // }
        }
      </Switch>
      */}
      {/*  <HomeScreen />*/}
      {/*  <FeaturedProductPage />
      <ShoppingCartPage />
      <Payment />
      <RecentlyViewedSection />

      <PlaceOrder />
      <ReviewOrder />
      <FeaturedProductPage />
      <Profile />*/}
      <Login />
      <Signup />
    </MainContainer>
  );
}

export default App;
