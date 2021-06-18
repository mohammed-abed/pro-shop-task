import {
  FlexBox,
  FlexCol,
  FlexRow,
  Image,
  InnerSection,
  Text,
} from "../../../App.Styles";
import { HeroTitle, SectionBox, YellowLine } from "./HomeScreen.Styles";
import Product from "../../../Assets/Product.png";

function FeaturedCategoriesSec() {
  // const [sliderIndex, setSliderIndex] = useState(0);
  // const handleChangeIndex = () => {};
  return (
    <InnerSection>
      <FlexBox bgcolor={"#fff"}>
        <SectionBox>
          <HeroTitle>Featured Categories</HeroTitle>
          ///dot
        </SectionBox>
      </FlexBox>
      <FlexRow justify={"start"}>
        <YellowLine></YellowLine>
      </FlexRow>
      <Hr />
      <FlexBox>
        <FlexCol width={"380px"} height={"392px"}>
          <FlexBox
            width={"380px"}
            height={"346px"}
            bgcolor={"#F7F8FC"}
            borderRadius={"15px"}
          >
            <Image src={Product} />
          </FlexBox>
          <Text fontSize={"24px"} weight={true} marginTop={"16px"}>
            LAPTOP
          </Text>
        </FlexCol>
        <FlexCol width={"380px"} height={"392px"} margin={true}>
          <FlexBox
            width={"380px"}
            height={"346px"}
            bgcolor={"#F7F8FC"}
            borderRadius={"15px"}
          >
            <Image src={Product} />
          </FlexBox>
          <Text fontSize={"24px"} weight={true} marginTop={"16px"}>
            COMPUTER COMPONENTS
          </Text>
        </FlexCol>
        <FlexCol width={"380px"} height={"392px"} margin={true}>
          <FlexBox
            width={"380px"}
            height={"346px"}
            bgcolor={"#F7F8FC"}
            borderRadius={"15px"}
          >
            <Image src={Product} />
          </FlexBox>
          <Text fontSize={"24px"} weight={true} marginTop={"16px"}>
            DEVICES
          </Text>
        </FlexCol>
        <FlexCol width={"380px"} he={"392px"} margin={true}>
          <FlexBox
            width={"380px"}
            height={"346px"}
            bgcolor={"#F7F8FC"}
            borderRadius={"15px"}
          >
            <Image src={Product} />
          </FlexBox>
          <Text fontSize={"24px"} weight={true} marginTop={"16px"}>
            ACCESSORIES
          </Text>
        </FlexCol>
      </FlexBox>
    </InnerSection>
  );
}
export default FeaturedCategoriesSec;
