import Button from "../../../Components/Button/Button";
import { GrayLine } from "../../Gust/HomeScreen/HomeScreen.Styles";
import { FlexRow, InnerSection, Typography } from "../../../App.Styles";
import { CartList, ProceedBox } from "./CartPage.Styles";
import CartItem from "../../../Components/CartItem/CartItem";
import Navigator from "../../../Components/Navigator/Navigator";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addCartItem,
  decreaseCartItemQty,
  deleteCartItem,
} from "../../../Redux/Cart/cartActions";

function CartScreen(props) {
  const [counter, setCounter] = useState(1);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <InnerSection style={{ marginTop: 32 }}>
      <Navigator name={"Shopping Cart"} />
      <FlexRow style={{ justifyContent: "start", alignItems: "start" }}>
        <CartList>
          {state.cart.cart.map((item) => (
            <CartItem
              increaseCounter={() => {
                if (item.quantity < item.countInStock)
                  dispatch(addCartItem(item, 1));
              }}
              decreaseCounter={() => {
                if (item.quantity > 1) dispatch(decreaseCartItemQty(item, 1));
              }}
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              counter={item.quantity}
              setCounter={setCounter}
              handleDelete={() => dispatch(deleteCartItem(item._id))}
            />
          ))}
        </CartList>
        <ProceedBox>
          <Typography
            fontSize={32}
            fontWeight={700}
            style={{ marginBottom: 80 }}
          >
            Subtotal ({state.cart.cart.length}) items
          </Typography>
          <Typography
            fontSize={32}
            fontWeight={700}
            style={{ marginBottom: 80 }}
          >
            Total (
            {state.cart.cart.reduce((acc, item) => {
              return acc + item.quantity;
            }, 0)}
            ) items
            {/*//Total ({state.cart.cart.length}) items*/}
          </Typography>
          <Typography
            fontSize={38}
            fontWeight={700}
            style={{ marginBottom: 30, justifyContent: "start" }}
          >
            Total Price $
            {state.cart.cart
              .reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)
              .toFixed(2)}
          </Typography>
          <GrayLine />

          <Button
            text={"Proceed to checkout"}
            link={"/proceed-checkout/shipping-address"}
            borderRadius={10}
            width={"100%"}
          />
        </ProceedBox>
      </FlexRow>
    </InnerSection>
  );
}

export default CartScreen;
