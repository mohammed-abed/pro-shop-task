import { FlexCol, FlexRow, Text } from "../../App.Styles";
import Button from "../../Components/Button/Button";
import TopRateSection from "../Gust/HomeScreen/TopRatedSection";

function Payment() {
  return (
    <FlexCol width={"1640px"} marginBottom={"79px"}>
      <FlexCol
        height="470px"
        justify="start"
        align="flex-end"
        margin="44px 0 0 0"
      >
        <FlexCol
          bgcolor="#F2F2F2"
          justify="start"
          align="start"
          height="380px"
          margin="0 0 30px 0"
          padding="31px 0 50px 31px"
          borderRadius="16px"
        >
          <Text fontSize="32px" weight="500">
            Payment Success !
          </Text>
          <FlexRow justify="flex-start" margin="0 0 30px 0">
            <Text fontSize="24px" weight="500" width="567px">
              Order number
            </Text>
            <Text fontSize="16px" weight="500" color="#929292">
              65AS1D56ASD156DS
            </Text>
          </FlexRow>
          <FlexRow justify="flex-start" margin="0 0 30px 0">
            <Text fontSize="24px" weight="500" width="567px">
              Shipping Address
            </Text>
            <Text fontSize="16px" weight="500" color="#929292">
              56051 Jones Falls, Philippines, Turkey - 62502
            </Text>
          </FlexRow>
          <FlexRow justify="flex-start" margin="0 0 30px 0">
            <Text fontSize="24px" weight="500" width="567px">
              Order Items
            </Text>
            <Text fontSize="16px" weight="500" color="#929292">
              1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless Bluetooth
              Headset
            </Text>
          </FlexRow>
          <Text
            fontSize="16px"
            color="#929292"
            weight="500"
            width="400px"
            lineHeight={"2"}
            marginA="0 0 30px 0"
          >
            An email will be sent to your email address contains order
            confirmation and tacking code.
          </Text>
        </FlexCol>
        <Button text="Keep Shopping" />
      </FlexCol>
      <TopRateSection title="Recently viewed" />
    </FlexCol>
  );
}

export default Payment;
