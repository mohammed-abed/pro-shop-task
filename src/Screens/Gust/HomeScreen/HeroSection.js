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
  Image,
  SideBox,
} from "./HomeScreen.Styles";
import Button from "../../../Components/Button/Button";
import Product from "../../../Assets/Product.png";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};

const HeroSection = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleChangeIndex = () => {};

  return (
    <FlexColumn>
      <FlexBox color={"#F2F2F2"}>
        <InnerSection>
          <SwipeableViews
            style={Object.assign({}, styles.root, styles.root)}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
            {sliderProducts.map((item) => (
              <HeroBox key={item._id}>
                <SideBox>
                  <Typography
                    fontSize={32}
                    color={"#242424"}
                    style={{ justifyContent: "start" }}
                  >
                    ${item.price}
                  </Typography>
                  <HeroTitle>{item.name.substring(0, 15)}</HeroTitle>
                  <Typography fontSize={32} color={"#242424"}>
                    {item.description.substring(0, 80)}
                  </Typography>
                  <Button
                    text="Shop now"
                    width={"220px"}
                    borderRadius={20}
                    style={{ marginTop: 42, height: 52 }}
                  />
                </SideBox>
                <SideBox>
                  <Image src={"https://proshop-ms.herokuapp.com/" + item.image} />
                </SideBox>
              </HeroBox>
            ))}
          </SwipeableViews>

          <FlexRow style={{ marginBottom: 30 }}>
            <Arrow
              isLeft={true}
              onClick={() => {
                if (sliderIndex === 0) setSliderIndex(2);
                else setSliderIndex(sliderIndex - 1);
              }}
            >
              &#10095;
            </Arrow>
            <Dot
              size={25}
              isGray={sliderIndex !== 0}
              onClick={() => {
                setSliderIndex(0);
              }}
            />
            <Dot
              size={25}
              isGray={sliderIndex !== 1}
              onClick={() => {
                setSliderIndex(1);
              }}
            />
            <Dot
              size={25}
              isGray={sliderIndex !== 2}
              onClick={() => {
                setSliderIndex(2);
              }}
            />
            <Arrow
              onClick={() => {
                if (sliderIndex === 2) setSliderIndex(0);
                else setSliderIndex(sliderIndex + 1);
              }}
            >
              &#10095;
            </Arrow>
          </FlexRow>
        </InnerSection>
      {/*  <InnerSection>
          <SwipeableViews
            style={Object.assign({}, styles.root, styles.root)}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
             <HeroBox>
              <SideBox>
                <Typography fontSize={32} color={"#242424"}>
                  Save up to $39.99
                </Typography>
                <HeroTitle>PlayStation 5</HeroTitle>
                <Typography fontSize={32} color={"#242424"}>
                  Lightning-fast download speed with super-fast SSD storage
                </Typography>
                <Button
                  text="Shop now"
                  width={"220px"}
                  borderRadius={20}
                  style={{ marginTop: 42, height: 52 }}
                />
              </SideBox>
              <SideBox>
                <Image src={Product} />
              </SideBox>
            </HeroBox>
            <HeroBox>
              <SideBox>
                <Typography fontSize={32} color={"#242424"}>
                  Save up to $11111.99
                </Typography>
                <HeroTitle>PlayStationggggggggggggggg 5</HeroTitle>
                <Typography fontSize={32} color={"#242424"}>
                  Lightning-fast download speed with super-fast SSD storage
                </Typography>
                <Button
                  text="Shop kkkkknow"
                  width={"220px"}
                  borderRadius={20}
                  style={{ marginTop: 42, height: 52 }}
                />
              </SideBox>
              <SideBox>
                <Image src={Product} />
              </SideBox>
            </HeroBox>

            <HeroBox>
              <SideBox>
                <Typography fontSize={32} color={"#242424"}>
                  Save up to $79.99
                </Typography>
                <HeroTitle>PlayStation 5</HeroTitle>
                <Typography fontSize={32} color={"#242424"}>
                  Lightning-fast download speed with super-fast SSD storage
                </Typography>
                <Button
                  text="Shop now"
                  width={"220px"}
                  borderRadius={20}
                  style={{ marginTop: 42, height: 52 }}
                />
              </SideBox>
              <SideBox>
                <Image src={Product} />
              </SideBox>
            </HeroBox>
            <HeroBox>
              <SideBox>
                <Typography fontSize={32} color={"#242424"}>
                  Save up to $69.99
                </Typography>
                <HeroTitle>PlayStation 5</HeroTitle>
                <Typography fontSize={32} color={"#242424"}>
                  Lightning-fast download speed with super-fast SSD storage
                </Typography>
                <Button
                  text="Shop now"
                  width={"220px"}
                  borderRadius={20}
                  style={{ marginTop: 42, height: 52 }}
                />
              </SideBox>
              <SideBox>
                <Image src={Product} />
              </SideBox>
            </HeroBox>
          </SwipeableViews>
          <FlexRow style={{ marginBottom: 30 }}>
            <Arrow
              isLeft={true}
              onClick={() => {
                if (sliderIndex === 0) setSliderIndex(2);
                else setSliderIndex(sliderIndex - 1);
              }}
            >
              &#10095;
            </Arrow>
            <Dot
              isGray={sliderIndex !== 0}
              onClick={() => {
                setSliderIndex(0);
              }}
            />
            <Dot
              isGray={sliderIndex !== 1}
              onClick={() => {
                setSliderIndex(1);
              }}
            />
            <Dot
              isGray={sliderIndex !== 2}
              onClick={() => {
                setSliderIndex(2);
              }}
            />
            <Arrow
              onClick={() => {
                if (sliderIndex === 2) setSliderIndex(0);
                else setSliderIndex(sliderIndex + 1);
              }}
            >
              &#10095;
            </Arrow>
          </FlexRow>*/}
        </InnerSection>
        {/* <Pagination dots={3} index={sliderIndex} onChangeIndex={this.handleChangeIndex} /> */}
      </FlexBox>
    </FlexColumn>
  );
};

export default HeroSection;
