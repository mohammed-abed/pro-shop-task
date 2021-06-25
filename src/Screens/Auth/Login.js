import { Form, Formik } from "formik";
import { FlexCol } from "../../App.Styles";
import {
  ErrorMsg,
  FormInput,
  LoginContainer,
  LoginImg,
  LoginRow,
} from "./Login.Styles";
import Button from "../../Components/Button/Button";
import { LoginSchema } from "./Schema";
import Product from "../../Assets/Product.png";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/User/UserActions";

// {setUser}
function Login() {
  const state = useSelector((store) => store);
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;
  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const History = useHistory();
  const dispatch = useDispatch();
  const handleSaveChange = async (values) => {
    /* setError("");
    setIsLoading(true);
    try {
      const response = await axios.post("/users/login", values);
      // setUser(response.data)
      dispatch(loginAction(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
      History.push("/");
    } catch (e) {
      setError(e.response.data.message);
    }
    setIsLoading(false);*/
    dispatch(loginAction(values, history));
  };
  return (
    <LoginContainer>
      <LoginRow>
        <FlexCol margin="44px 0 78px 0" align="flex-start" justify="start">
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
                <Form>
                  <FormInput
                    type={"email"}
                    name={"email"}
                    palceholder={"Email"}
                    required={true}
                  />
                  {errors.email && touched.email ? (
                    <ErrorMsg>{errors.email}</ErrorMsg>
                  ) : null}

                  <FormInput
                    type={"password"}
                    name={"password"}
                    palceholder={"Password"}
                    required={true}
                  />
                  {errors.password && touched.password ? (
                    <ErrorMsg>{errors.password}</ErrorMsg>
                  ) : null}
                  <Button text="Login" isLoading={isLoading} />
                </Form>
              );
            }}
          </Formik>
          <Button
            link={"/register"}
            width={"100%"}
            borderRadius={20}
            text={"Sign up now"}
            style={{
              border: "3px solid #FCDD06",
              marginTop: 40,
              background: "#fff",
            }}
          />
        </FlexCol>
        <LoginImg src={Product} />
      </LoginRow>
    </LoginContainer>
  );
}

export default Login;
