import { useEffect } from "react";
import FeaturedProductsSection from "./FeaturedProductsSection";
import TopRatedSection from "./TopRatedSection";
import HeroSection from "./HeroSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedProducts,
  getSliderImages,
} from "../../../Redux/Guest/guestActions";

const HomeScreen = () => {
  /*  const [sliderIndex, setSliderIndex] = useState(0);
  const handleChangeIndex = () => {};*/
  // const [sliderProducts, setSliderProducts] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  /*const fetchData = async () => {
    try {
      const response = await axios.get("/products/top");

      setSliderProducts(response.data);
    } catch (e) {}
  };*/

  useEffect(() => {
    dispatch(getSliderImages());
    dispatch(getFeaturedProducts());

    // fetchData();
  }, [dispatch]);

  return (
    <flexColumn>
      <HeroSection
        /*sliderProducts={sliderProducts}*/ sliderProducts={
          state.guestState.sliderImages
        }
      />
      {/*<FeaturedCategoriesSec />*/}
      <FeaturedProductsSection
        /*products={[]} */ products={state.guestState.products}
      />
      <TopRatedSection topRatedProducts={state.guestState.sliderImages} />
      {/*<RecentlyViewedSection />*/}
    </flexColumn>
  );
};

export default HomeScreen;
