import { FlexCol, Image, Text } from "../../../App.Styles";
import Cart from "../../../Assets/Cart.png";
import { Span } from "../../../Components/ShoppingCart/ShoppingCart.Styles";
import TopRateSection from "./TopRatedSection";

function RecentlyViewedSection({ discount }) {
  return (
    <FlexCol width={"1640px"} marginBottom={"117px"}>
      <Text color={"#242424"} fontSize={"24px"} width={"100%"} weight="500">
        <Span color={"#707070"}>Back / </Span>Shopping Cart
      </Text>
      <FlexCol height="370px" margin="20px 0 60px 0">
        <Text fontSize="32px" weight="500">
          Your shopping cart is empty
        </Text>
        <Image src={Cart} />
      </FlexCol>
      <TopRateSection title="Recently viewed" />
    </FlexCol>
  );
}
export default RecentlyViewedSection;
