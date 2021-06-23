import {
  Input,
  LoginCol,
  LoginColSmall,
  LoginContainer,
  LoginRow,
  LoginTitle,
  SignUpImg,
} from "./Login.Styles";
import { Span } from "../../Components/ShoppingCart/ShoppingCart.Styles";
import Button from "../../Components/Button/Button";
import { Text } from "../../App.Styles";
import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { GrayLine } from "../Gust/HomeScreen/HomeScreen.Styles";
import Product from "../../Assets/Product.png";

function SignUp() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  return (
    <LoginContainer>
      <LoginRow>
        <LoginCol>
          <LoginTitle>Signup.</LoginTitle>
          <Text fontSize="32px" color="#AEAEAE" marginA="0 0 52px">
            Sign up and get exclusive offers from us
          </Text>
          <Text fontSize="22px">Name</Text>
          <Input
            type="text"
            value={name}
            placeholder="name@example.com"
            onChange={(e) => setName(e.target.name)}
          />
          <Text fontSize="22px">Enter your email address</Text>
          <Input
            type="email"
            value={value}
            placeholder="name@example.com"
            onChange={(e) => setValue(e.target.value)}
          />
          <Text fontSize="22px">Enter your password</Text>
          <Input
            type="password"
            value={password}
            placeholder="........."
            size="50px"
            onChange={(e) => setPassword(e.target.password)}
          />
          <Text fontSize="22px">Confirm your password</Text>
          <Input
            type="password"
            value={passwordConfirm}
            placeholder="........."
            size="50px"
            onChange={(e) => setPasswordConfirm(e.target.passwordConfirm)}
          />
          <Button
            text="Sign up"
            width="400px"
            height="40px"
            fontSize="22px"
            margin="0 0 25px"
          />
          <LoginColSmall>
            <GrayLine height="3px" />
            <Text fontSize="22px" color="#AEAEAE" weight="500">
              Have an account ?{" "}
              <Span margin="0 0 0 10px" color="#242424">
                {" "}
                Login
              </Span>
            </Text>
          </LoginColSmall>
        </LoginCol>
        <SignUpImg src={Product} />
      </LoginRow>
    </LoginContainer>
  );
}
export default SignUp;
