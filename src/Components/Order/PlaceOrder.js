import { OrderContainer } from "./Qrder.Styles";
import { FlexCol, FlexRow, Image, Text } from "../../App.Styles";
import { Span } from "../ShoppingCart/ShoppingCart.Styles";
import Button from "../Button/Button";
import Product from "../../Assets/Product.png";

function PlaceOrder() {
  return (
    <OrderContainer>
      <FlexCol margin="44px 0 0 0" align="flex-start" width="1516px">
        <Text fontSize="32px" weight="700" marginA="0 0 36px 0">
          Review Order
        </Text>
        <FlexRow align="center" width="55%" margin="0 0 36px">
          <FlexRow justify="flex-start">
            <Span
              width="40px"
              weight="700"
              height="40px"
              bgcolor="#FCDD0680"
              fontSize="22px"
              justify="center"
              align="center"
            >
              1
            </Span>
            <Text
              fontSize="22px"
              weight="700"
              marginA="0 0 0 10px"
              color="#00000080"
            >
              Shipping and Payment
            </Text>
          </FlexRow>
          <FlexRow
            width="250px"
            height="2px"
            bgcolor="#F2F2F2"
            justify="center"
            margin="0 20px 0 0"
          />
          <FlexRow justify="flex-start">
            <Span
              width="40px"
              height="40px"
              weight="700"
              bgcolor="#FCDD06"
              fontSize="22px"
              justify="center"
              align="center"
              color="#000"
            >
              2
            </Span>
            <Text
              fontSize="22px"
              weight="700"
              color="#000"
              marginA="0 0 0 10px"
            >
              Place an Order
            </Text>
          </FlexRow>
        </FlexRow>
        <FlexRow justify="flex-start" align="flex-start">
          <FlexCol
            justify="flex-start"
            align="flex-start"
            width="950px"
            bgcolor="#F2F2F2"
            height="652px"
            padding="45px 88px"
            borderRadius="16px"
          >
            <Text fontSize="24px" weight="700" marginA="0 0 16px">
              Shipping Address
            </Text>
            <FlexRow justify="space-between">
              <FlexCol align="flex-start" width="48%">
                <Text
                  fontSize="22px"
                  color="#707070"
                  weight="700"
                  marginA="10px 0 16px"
                >
                  Mohammed
                </Text>
                <Text
                  width="250px"
                  fontSize="16px"
                  weight="700"
                  color="#707070"
                  marginA="0 0 40px"
                  lineHeight="1.8"
                >
                  56051 Jones Falls, Gaza, Palestine - 62502
                </Text>
              </FlexCol>
            </FlexRow>

            <FlexRow justify="space-between" align="baseline">
              <Text fontSize="24px" weight="700" marginA="0 0 20px 0">
                Order Details
              </Text>
              <Text
                borderB=" 1px solid #707070"
                color="#70707095"
                fontSize="22px"
                weight="700"
              >
                Change
              </Text>
            </FlexRow>
            <FlexRow margin="0 0 20px" height="96px">
              <Image src={Product} width="135px" />
              <FlexCol padding="0 22px 35px 22px" align="flex-start">
                <Text
                  align="flex-start"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                  marginA="0 0 30px"
                >
                  iPhone 11 Pro 256GB Memory
                </Text>
                <FlexRow justify="space-between">
                  <Text color="#70707095" fontSize="16px" weight="700">
                    $499.99 <Span margin="0 0 0 10px">×1</Span>
                  </Text>
                  <Text color="#242424" fontSize="16px" weight="700">
                    $89.99
                  </Text>
                </FlexRow>
              </FlexCol>
            </FlexRow>
            <FlexRow margin="0 0 20px" height="96px">
              <Image src={Product} width="135px" />
              <FlexCol padding="0 22px 35px 22px" align="flex-start">
                <Text
                  align="flex-start"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                  marginA="0 0 30px"
                >
                  Apple Airpods Wireless Bluetooth Headset
                </Text>
                <FlexRow justify="space-between">
                  <Text color="#70707095" fontSize="16px" weight="700">
                    $89.99 <Span margin="0 0 0 10px">×1</Span>
                  </Text>
                  <Text color="#242424" fontSize="16px" weight="700">
                    $89.99
                  </Text>
                </FlexRow>
              </FlexCol>
            </FlexRow>

            <FlexRow justify="space-between" align="baseline">
              <Text fontSize="24px" weight="700" marginA="0 0 20px 0">
                Payment Details
              </Text>
              <Text
                borderB=" 1px solid #707070"
                color="#70707095"
                fontSize="22px"
                weight="700"
              >
                Change
              </Text>
            </FlexRow>
            <FlexRow justify="start" align="center">
              <Image src={Product} width="80px" />
              <Text color="#70707095" fontSize="16px" weight="700">
                **** 1245
              </Text>
            </FlexRow>
          </FlexCol>

          <FlexCol
            justify="flex-start"
            align="flex-start"
            width="400px"
            height="280px"
            margin="0 0 0 30px"
            bgcolor="#F2F2F2"
            borderRadius="16px"
          >
            <FlexRow
              justify="space-between"
              align="baseline"
              padding="35px 22px 22px 22px"
            >
              <Text fontSize="32px" weight="700" marginA="0 0 20px 0">
                Order Details
              </Text>
            </FlexRow>

            <FlexCol padding="0 22px">
              <FlexRow justify="space-between" margin="0 0 16px">
                <Text
                  width="30%"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                >
                  Subtotal
                </Text>
                <Text
                  justify="flex-end"
                  width="30%"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                >
                  $589.98
                </Text>
              </FlexRow>
              <FlexRow justify="space-between" margin="0 0 16px">
                <Text
                  width="30%"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                >
                  Tax
                </Text>
                <Text
                  justify="flex-end"
                  width="30%"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                >
                  $2.53
                </Text>
              </FlexRow>
              <FlexRow justify="space-between" margin="0 0 16px">
                <Text
                  width="30%"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                >
                  Shipping
                </Text>
                <Text
                  justify="flex-end"
                  width="30%"
                  color="#70707095"
                  fontSize="16px"
                  weight="700"
                >
                  $0.00
                </Text>
              </FlexRow>
              <FlexRow justify="space-between" margin="0 0 16px">
                <Text width="30%" fontSize="16px" weight="700">
                  Total
                </Text>
                <Text
                  justify="flex-end"
                  width="30%"
                  fontSize="16px"
                  weight="700"
                >
                  $592.51
                </Text>
              </FlexRow>
            </FlexCol>
            <FlexRow justify="flex-end" margin="60px 0 ">
              <Button text="Place Order" />
            </FlexRow>
          </FlexCol>
        </FlexRow>
      </FlexCol>
    </OrderContainer>
  );
}
