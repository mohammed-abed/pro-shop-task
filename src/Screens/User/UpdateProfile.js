import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProfileAction,
  updateProfileAction,
} from "../../Redux/User/userActions";
import {
  GrayContainer,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../App.Styles";
import { Form, Formik } from "formik";
import { ErrorMsg, Input } from "../Auth/Login.Styles";
import Button from "../../Components/Button/Button";
import { updateProfileSchema } from "../../Schemas/Schema";

function UpdateProfile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(updateProfileAction(values, history));
  };

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  return state.userDetails.userProfile?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <InnerSection
      style={{
        marginTop: 129,
        flexDirection: "row",
        justifyContent: "start",
      }}
    >
      <GrayContainer style={{ height: "auto" }}>
        <Typography
          style={{ marginBottom: 60, justifyContent: "start" }}
          fontWeight={700}
          fontSize={32}
        >
          My Profile
        </Typography>

        <Formik
          initialValues={{
            email: state.userDetails.userProfile?.user?.email,
            password: "",
            passwordConfirmation: "",
            name: state.userDetails.userProfile?.user?.name,
          }}
          validationSchema={updateProfileSchema()}
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
                  style={{ marginTop: 50 }}
                  text={"Update Profile"}
                  width={"220px"}
                  borderRadius={6}
                />
              </Form>
            );
          }}
        </Formik>
      </GrayContainer>
    </InnerSection>
  );
}

export default UpdateProfile;
