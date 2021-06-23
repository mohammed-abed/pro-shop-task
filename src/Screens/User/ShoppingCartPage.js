import { FlexCol, FlexRow, Text } from "../../App.Styles";
import { Span } from "../../Components/ShoppingCart/ShoppingCart.Styles";
import { ShoppingCart } from "@material-ui/icons";
import Button from "../../Components/Button/Button";
import { GrayLine } from "../Gust/HomeScreen/HomeScreen.Styles";
import Product from "../../Assets/Product.png";

function ShoppingCartPage({ discount }) {
  return (
    <FlexCol width={"1640px"} marginBottom={"117px"}>
      <Text color={"#242424"} fontSize={"24px"} width={"100%"} weight="500">
        <Span color={"#707070"}>Back / </Span>Shopping Cart
      </Text>

      <FlexRow align={"start"} justify={"space-between"}>
        <FlexCol width={"1226px"}>
          <ShoppingCart
            img={Product}
            text={"Apple iPhone 11 Pro 256GB Memory"}
            price={"$499.99"}
          />
          <ShoppingCart
            img={Product}
            text={"Apple Airpods Wireless Bluetooth Headset"}
            price={"$89.99"}
            discount={"$99.99"}
          />
          <ShoppingCart
            img={Product}
            text={"Sony PlayStation 4 Pro White Version"}
            price={"$399.99"}
          />
        </FlexCol>
        <FlexCol
          bgcolor={"#F2F2F2"}
          height={"351px"}
          width={"384px"}
          borderRadius="16px"
        >
          <FlexCol
            height={"60%"}
            align={"start"}
            padding={"0 40px"}
            justify={"start"}
          >
            <Text fontSize={"32px"} weight={500}>
              Subtotal (3) items
            </Text>
            {discount ? (
              <FlexCol align="flex-start">
                <Text
                  width={"120px"}
                  weight={"700"}
                  fontSize={"24px"}
                  color={"#707070"}
                  decoration={true}
                >
                  {discount}
                </Text>
                <Text width={"120px"} weight={"700"} fontSize={"30px"}>
                  $989.97
                </Text>
              </FlexCol>
            ) : (
              <Text fontSize={"38px"} weight={700}>
                $989.97
              </Text>
            )}
          </FlexCol>
          <GrayLine />
          <Button
            width={"324px"}
            height={"62px"}
            margin={"50px"}
            text="Proceed to checkout"
          />
        </FlexCol>
      </FlexRow>
    </FlexCol>
  );
}

export default ShoppingCartPage;
