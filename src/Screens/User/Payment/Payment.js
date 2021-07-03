import {
  FlexCol,
  FlexRow,
  InnerSection,
  Line,
  Text,
  Typography,
} from "../../../App.Styles";
import Button from "../../../Components/Button/Button";
import TopRateSection from "../../Gust/HomeScreen/TopRatedSection";
import PaymentComponent from "./PaymentComponent";
import { Num } from "./Payment.Styles";
import { useLocation } from "react-router";
import PlaceOrderComponent from "./PlaceOrderComponent";
function Payment(props) {
  const location = useLocation();
  const isShippingPage = location.pathname.includes("shipping-address");

  //const isShippingPage = props.location.pathname.includes("shipping-address");

  return (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        Review Order
      </Typography>
      <FlexRow style={{ width: "682px", height: "40px" }}>
        <Typography
          style={{ justifyContent: "start" }}
          fontSize={22}
          color={"#242424"}
        >
          <Num>&nbsp; 1 &nbsp;</Num> Shipping and Payment
        </Typography>
        <Line width={180} style={{ marginLeft: 10 }} />
        <Typography
          style={{ justifyContent: "start" }}
          fontSize={22}
          color={"#707070"}
        >
          <Num isGray={isShippingPage}>&nbsp; 2 &nbsp;</Num> Place an Order
        </Typography>
      </FlexRow>

      {isShippingPage ? <PaymentComponent /> : <PlaceOrderComponent />}
    </InnerSection>
  );
}

export default Payment;

/*
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
*/
