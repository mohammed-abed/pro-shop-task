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
import HeroSection from "./FeaturedProductsSection";
import FeaturedCategoriesSec from "./FeaturedCategoriesSec";

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
    </flexColumn>
  );
};

export default HomeScreen;
