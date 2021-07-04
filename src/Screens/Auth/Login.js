import { Form, Formik } from "formik";
import { InnerSection, Typography } from "../../App.Styles";
import { ErrorMsg, FormBox, Input, StyledImage } from "./Login.Styles";
import Button from "../../Components/Button/Button";
import { LoginSchema } from "../../Schemas/Schema";
import Product from "../../Assets/Product.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Redux/User/userActions";
import { GrayLine } from "../Gust/HomeScreen/HomeScreen.Styles";

// {setUser}
function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;

  const handleSaveChange = async (values) => {
    dispatch(loginAction(values, history));
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
          Login.
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
          }}
          validationSchema={LoginSchema()}
          onSubmit={handleSaveChange}
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

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button
                  isLoading={isLoading}
                  width={"100%"}
                  borderRadius={6}
                  text={"Login"}
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
        >
          Forgot your password?
        </Typography>
        <GrayLine />
        <Button
          link={"/Signup"}
          width={"100%"}
          borderRadius={20}
          text={"Sign up now"}
          style={{
            border: "3px solid #FCDD06",
            marginTop: 40,
            background: "#fff",
          }}
        />
      </FormBox>
      <StyledImage src={Product} />
    </InnerSection>
  );
}

export default Login;
