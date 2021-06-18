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
  YellowLine,
  GrayLine,
} from "./HomeScreen.Styles";
import Button from "../../../Components/Button/Button";
import slideImage from "../../../Assets/Screenshot 2021-06-14 110717.png";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Product from "../../../Assets/Product.png";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};

const FeaturedProduct = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleChangeIndex = () => {};

  return (
    <FlexBox bgcolor={"#F7F8FC"}>
      <InnerSection margin={"60px 0"}>
        <HeroTitle>Featured Products</HeroTitle>
        <FlexRow justify={"center"}>
          <YellowLine />
        </FlexRow>
        <GrayLine />
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={sliderIndex}
          onChangeIndex={handleChangeIndex}
        >
          <FlexRow>
            <ProductCard
              img={Product}
              text={"Apple iPhone 11 Pro 256GB Memory"}
              height={"655px"}
              value={true}
              price={"$499.99"}
              SaveBtn={<BookmarkBorderIcon />}
              star={<StarIcon />}
              imgHeight={"60%"}
              emptyStar={<StarHalfIcon />}
            />

            <ProductCard
              img={Product}
              text={"Apple Airpods Wireless Bluetooth Headset"}
              height={"655px"}
              margin={true}
              value={true}
              SaveBtn={<BookmarkBorderIcon />}
              price={"$99.99"}
              newPrice={"$89.99"}
              Discount={"-30%"}
              imgHeight={"60%"}
              star={<StarIcon />}
              emptyStar={<StarBorderIcon />}
            />

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
          <FlexRow>
            <ProductCard
              img={Product}
              text={"Apple iPhone 11 Pro 256GB Memory"}
              height={"655px"}
              value={true}
              price={"$499.99"}
              SaveBtn={<BookmarkBorderIcon />}
              star={<StarIcon />}
              imgHeight={"60%"}
              emptyStar={<StarHalfIcon />}
            />

            <ProductCard
              img={Product}
              text={"Apple Airpods Wireless Bluetooth Headset"}
              height={"655px"}
              margin={true}
              value={true}
              SaveBtn={<BookmarkBorderIcon />}
              price={"$99.99"}
              newPrice={"$89.99"}
              Discount={"-30%"}
              imgHeight={"60%"}
              star={<StarIcon />}
              emptyStar={<StarBorderIcon />}
            />

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
          <FlexRow>
            <ProductCard
              img={Product}
              text={"Apple iPhone 11 Pro 256GB Memory"}
              height={"655px"}
              value={true}
              price={"$499.99"}
              SaveBtn={<BookmarkBorderIcon />}
              star={<StarIcon />}
              imgHeight={"60%"}
              emptyStar={<StarHalfIcon />}
            />

            <ProductCard
              img={Product}
              text={"Apple Airpods Wireless Bluetooth Headset"}
              height={"655px"}
              margin={true}
              value={true}
              SaveBtn={<BookmarkBorderIcon />}
              price={"$99.99"}
              newPrice={"$89.99"}
              Discount={"-30%"}
              imgHeight={"60%"}
              star={<StarIcon />}
              emptyStar={<StarBorderIcon />}
            />

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
        </SwipeableViews>
        ///dot
      </InnerSection>
    </FlexBox>
  );
};

export default FeaturedProduct;
