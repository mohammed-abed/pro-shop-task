import { FlexBox, FlexRow, InnerSection } from "../../../App.Styles";
import {
  GrayLine,
  HeroTitle,
  VirtecalLine,
  YellowLine,
} from "./HomeScreen.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Product from "../../../Assets/Product.png";

function TopRatedSection(/*{ title }*/) {
  return (
    <FlexBox>
      <InnerSection align="flex-start">
        <HeroTitle>TopRated</HeroTitle>
        <FlexRow justify={"start"}>
          <YellowLine></YellowLine>
        </FlexRow>
        <GrayLine />
        <FlexRow border={"2px solid #FCDD06"} borderRadius={"16px"}>
          <ProductCard
            img={Product}
            text={"Canon Eos 80D DSLR Camera"}
            height={"588px"}
            value={true}
            cost={"$799.99"}
            SaveBtn={<BookmarkBorderIcon />}
            star={<StarIcon />}
            imgHeight={"50%"}
            emptyStar={<StarHalfIcon />}
          />
          <VirtecalLine margin={true} />
          <ProductCard
            img={Product}
            text={"Logitech G-Series Gaming Mouse"}
            height={"588px"}
            value={true}
            SaveBtn={<BookmarkBorderIcon />}
            price={"$49.99"}
            imgHeight={"50%"}
            star={<StarIcon />}
            emptyStar={<StarIcon />}
          />
          <VirtecalLine margin={true} />
          <ProductCard
            img={Product}
            text={"Amazon Echo Dot 3rd Generation"}
            price={"$29.99"}
            IconBtn={<BookmarkBorderIcon />}
            height={"588px"}
            imgHeight={"50%"}
            star={<StarIcon />}
            emptyStar={<StarIcon />}
          />
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}

export default TopRatedSection;
