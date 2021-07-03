import { useEffect, useState } from "react";
import FeaturedCategoriesSec from "./FeaturedCategoriesSec";
import FeaturedProductsSection from "./FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection";
import HeroSection from "./HeroSection";
import RecentlyViewedSection from "./RecentlyViewedSection";
import axios from "axios";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};

const HomeScreen = () => {
  /*  const [sliderIndex, setSliderIndex] = useState(0);

  const handleChangeIndex = () => {};*/
  const [sliderProducts, setSliderProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/products/top");

      setSliderProducts(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <flexColumn>
      <HeroSection sliderProducts={sliderProducts} />
      <FeaturedCategoriesSec />
      <FeaturedProductsSection />
      {/*<TopRatedSection />*/}
      {/*<RecentlyViewedSection />*/}
    </flexColumn>
  );
};

export default HomeScreen;
