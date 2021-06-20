import * as formik from "formik";
import { FlexCol, Image } from "../../App.Styles";
import { ErrorMsg, FormInput, LoginContainer } from "./Login.Styles";
import Button from "../../Components/Button/Button";
import { Form } from "formik";
import { LoginSchema } from "./Schema";

function Login() {
  const handleSaveChange = (values) => {
    console.log(values);
  };
  return (
    <LoginContainer>
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
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}
                <Button text="Login"/>
              </Form>
            );
          }}
        </Formik>
        <Image src={} width="800px" margin="0 0 0 174px" />
      </FlexCol>
    </LoginContainer>
  );
}
