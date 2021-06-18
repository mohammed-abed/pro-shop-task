import { CartContainer } from "./ShoppingCart.Styles";
import { FlexCol, FlexRow, Image, Text } from "../../App.Styles";
import { useState } from "react";
import PluseIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";

function ShoppingCart({ img, text, price, discount }) {
  const [count, setcount] = useState(1);
  return (
    <CartContainer>
      <FlexCol
        bgcolor={"#F2F2F2"}
        height={"242px"}
        width={"1226px"}
        borderRadius="16px"
      >
        <FlexRow justify={"flex-end"}>
          <CloseIcon
            style={{
              position: "relative",
              top: "27px",
              right: "23px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          />
        </FlexRow>
        <FlexRow justify={"space-between"}>
          <Image src={img} width={"304px"} height="203px" />
          <Text
            width={"409px"}
            weight={"500"}
            color={"#242424"}
            marginA={"51px 0 119px 0"}
            fontSize={"24px"}
          >
            {text}
          </Text>
          <FlexRow
            width={"204px"}
            height={"40px"}
            margin={"0 21px 0 120px"}
            bgcolor={"#FFFFFF"}
          >
            <addIcon
              onClick={() => {
                if (count > 1) setcount(count - 1);
              }}
            >
              <MinusIcon />
            </addIcon>
            <Text
              width={"108px"}
              align="center"
              justify="center"
              weight="700"
              fontSize="24px"
            >
              {count}
            </Text>
            <addIcon
              onClick={() => {
                if (count >= 1) setcount(count + 1);
              }}
            >
              <PluseIcon />
            </addIcon>
          </FlexRow>
          {discount ? (
            <FlexCol width="120px" margin={"0 35px 0 120px"}>
              <Text
                width={"120px"}
                weight={"700"}
                fontSize={"24px"}
                color={"#707070"}
                decoration={true}
                justify="flex-end"
              >
                {discount}
              </Text>
              <Text
                width={"120px"}
                weight={"700"}
                fontSize={"30px"}
                justify="flex-end"
              >
                {price}
              </Text>
            </FlexCol>
          ) : (
            <Text
              width={"120px"}
              marginA={"0 35px 0 120px"}
              weight={"700"}
              fontSize={"30px"}
            >
              {price}
            </Text>
          )}
        </FlexRow>
      </FlexCol>
    </CartContainer>
  );
}
