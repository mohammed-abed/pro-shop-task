import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import FeaturedProductPage from "./Screens/Gust/HomeScreen/FeaturedProductPage";
import RecentlyViewedSection from "./Screens/Gust/HomeScreen/RecentlyViewedSection";
import Payment from "./Screens/User/Payment";
import ShoppingCartPage from "./Screens/User/ShoppingCartPage";
import { Route, Switch } from "react-router";

function App() {
  return (
    <MainContainer>
      <NavBar />
      {/*  <Switch>
        <Route path={"/"} component={HomeScreen} />
      </Switch>*/}
      {/*  <HomeScreen />*/}
      <FeaturedProductPage />
      <ShoppingCartPage />
      <Payment />
      <RecentlyViewedSection />
    </MainContainer>
  );
}

export default App;
