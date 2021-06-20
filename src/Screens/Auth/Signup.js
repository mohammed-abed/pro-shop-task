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
          <Text22PX>Name</Text22PX>
          <Input
            type="text"
            value={name}
            placeholder="name@example.com"
            onChange={(e) => setName(e.target.name)}
          />
          <Text22PX>Enter your email address</Text22PX>
          <Input
            type="email"
            value={value}
            placeholder="name@example.com"
            onChange={(e) => setValue(e.target.value)}
          />
          <Text22PX>Enter your password</Text22PX>
          <Input
            type="password"
            value={pass}
            placeholder="........."
            size="50px"
            onChange={(e) => setPassword(e.target.pass)}
          />
          <Text22PX>Confirm your password</Text22PX>
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
            <Text22PX color="#AEAEAE" weight="500">
              Have an account ?{" "}
              <Span margin="0 0 0 10px" color="#242424">
                {" "}
                Login
              </Span>
            </Text22PX>
          </LoginColSmall>
        </LoginCol>
        <SignUpImg src={} />
      </LoginRow>
    </LoginContainer>
  );
}
