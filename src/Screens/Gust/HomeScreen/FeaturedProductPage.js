import { FlexBox, FlexRow, InnerSection } from "../../../App.Styles";
import { GrayLine, HeroTitle, YellowLine } from "./HomeScreen.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Product from "../../../Assets/Product.png";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

function FeaturedProductPage() {
  // const [sliderIndex, setSliderIndex] = useState(0);
  // const handleChangeIndex = () => {};

  return (
    <FlexBox bgcolor={"#F7F8FC"} marginTop="25px">
      <InnerSection>
        <HeroTitle>Featured Products</HeroTitle>
        <FlexRow justify={"center"}>
          <YellowLine></YellowLine>
        </FlexRow>
        <GrayLine />

        <FlexRow justify="flex-start">
          <ProductCard
            img={Product}
            text={"Sony Playstation 4 Pro White Version"}
            price={"$399.99"}
            SaveBtn={<BookmarkBorderIcon />}
            height={"655px"}
            imgHeight={"60%"}
            star={<StarBorderIcon />}
            emptyStar={<StarIcon />}
          />
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}
export default FeaturedProductPage;
