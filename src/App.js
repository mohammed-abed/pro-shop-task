import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import RecentlyViewedSection from "./Screens/Gust/HomeScreen/RecentlyViewedSection";
import Login from "./Screens/Auth/Login";
import { Route, Switch } from "react-router";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import { useSelector } from "react-redux";
import Register from "./Screens/Auth/Register";

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
        <Route path={"/login"} component={RecentlyViewedSection} />
        {state.userDetails.user._id ? null : (
          <Route
            path={"/login"}
            component={() => {
              return <Login />;
            }}
          />
        )}
        {state.userDetails.user._id ? null : (
          <Route
            path={"/register"}
            component={() => {
              return <Register />;
            }}
          />
        )}
        {/*{*/}
        {/*  state.userDetails.user._id ? null : (*/}
        {/*    <Route exact={true} path={"/login"} component={Login} />*/}
        {/*  )*/}
        // ()=>
        {
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
      {/*<Signup />*/}
    </MainContainer>
  );
}

export default App;
