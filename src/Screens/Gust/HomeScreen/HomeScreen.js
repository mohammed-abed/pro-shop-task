import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import {
  Arrow,
  Dot,
  HeroBox,
  HeroTitle,
  SideBox,
  Image,
} from "./HomeScreen.Styles";
import Button from "../../../Components/Button/Button";
import slideImage from "../../../Assets/Screenshot 2021-06-14 110717.png";
import FeaturedCategoriesSec from "./FeaturedCategoriesSec";
import FeaturedProductsSection from "./FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection";
import HeroSection from "./HeroSection";
import NavBar from "../../../Components/NavBar/NavBar";
import FeaturedProductPage from "./FeaturedProductPage";
import RecentlyViewedSection from "./RecentlyViewedSection";
import Payment from "../../User/Payment";
import ShoppingCart from "../../../Components/ShoppingCart/ShoppingCart";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};

const HomeScreen = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleChangeIndex = () => {};

  return (
    <flexColumn>
      <HeroSection />
      <FeaturedCategoriesSec />
      <FeaturedProductsSection />
      <TopRatedSection />
      <RecentlyViewedSection />
      <FeaturedProductPage />
      <Payment />
      <Profile />
      <ShoppingCart />
      <login />
      <Signup />
      <PlaceOreder />
      <ReviewOrder />
    </flexColumn>
  );
};

export default HomeScreen;
