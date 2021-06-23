import { useState } from "react";
import FeaturedCategoriesSec from "./FeaturedCategoriesSec";
import FeaturedProductsSection from "./FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection";
import HeroSection from "./HeroSection";
import RecentlyViewedSection from "./RecentlyViewedSection";

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
    </flexColumn>
  );
};

export default HomeScreen;
