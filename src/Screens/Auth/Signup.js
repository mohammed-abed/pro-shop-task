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
        const history = useHistory();
        const dispatch = useDispatch();
        const state = useSelector((store) => store);
        const userDetails = state.userDetails;

        const { error, isLoading } = userDetails;

        const handleSaveChanges = async (values) => {
        dispatch(registerAction(values, history));
      };

        return (
        <InnerSection
          style={{
            marginTop: 44,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormBox>
            <Typography
              fontSize={60}
              color={"#242424"}
              fontWeight={700}
              style={{
                margin: "0 0 10px 0",
                justifyContent: "start",
              }}
            >
              Register.
            </Typography>
            <Typography
              fontSize={28}
              color={"#70707070"}
              fontWeight={700}
              style={{
                margin: "0 0 52px 0",
                justifyContent: "start",
              }}
            >
              Login with your data that you entered during registration
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
                passwordConfirmation: "",
                name: "",
              }}
              validationSchema={registerSchema()}
              onSubmit={handleSaveChanges}
            >
              {({ errors, touched }) => {
                return (
                  <Form
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Input name={"name"} type={"name"} placeholder={"Name"} />
                    {errors.name && touched.name ? (
                      <ErrorMsg>{errors.name}</ErrorMsg>
                    ) : null}

                    <Input name={"email"} type={"email"} placeholder={"Email"} />
                    {errors.email && touched.email ? (
                      <ErrorMsg>{errors.email}</ErrorMsg>
                    ) : null}

                    <Input
                      name={"password"}
                      type={"password"}
                      placeholder={"password"}
                    />
                    {errors.password && touched.password ? (
                      <ErrorMsg>{errors.password}</ErrorMsg>
                    ) : null}

                    <Input
                      name={"passwordConfirmation"}
                      type={"password"}
                      placeholder={"Confirmation password"}
                    />
                    {errors.passwordConfirmation && touched.passwordConfirmation ? (
                      <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
                    ) : null}

                    {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                    <Button
                      isLoading={isLoading}
                      width={"100%"}
                      borderRadius={6}
                      text={"Sign up"}
                    />
                  </Form>
                );
              }}
            </Formik>
            <Typography
              fontSize={22}
              color={"#242424"}
              style={{
                margin: "16px 0 22px 0",
              }}
            ></Typography>
            <Hr />
            <Typography
              fontSize={22}
              color={"#707070"}
              style={{
                margin: "40px 0 22px 0",
              }}
            >
              Have an account ? <Link to={"/login"}>Login</Link>
            </Typography>
          </FormBox>
          <StyledImage src={img} />
        </InnerSection>
        );
       {/* <LoginCol>
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
      </LoginRow>*/}
    </LoginContainer>
  );
}
export default SignUp;
