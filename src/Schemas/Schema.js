import * as yup from "yup";

export const LoginSchema = () =>
  yup.object({
    email: yup
      .string()
      .email("Please Enter a Valid Email ..")
      .required("Please Enter a Email .."),
    password: yup.string().min(5).required("Please Enter a Password .."),
  });

export const registerSchema = () => {
  return yup.object({
    name: yup.string().required("Please enter a name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    password: yup.string().min(6).required("Please enter a password"),
    passwordConfirmation: yup
      .string()
      .min(6)
      .required("Please enter password confirmation")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
};

export const updateProfileSchema = () => {
  return yup.object({
    name: yup.string().required("Please enter a name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter an email"),
    password: yup.string().min(6),
    passwordConfirmation: yup
      .string()
      .min(6)
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
};
export const ShippingSchema = () => {
  return yup.object({
    country: yup.string().required("Please enter country name"),
    city: yup.string().required("Please enter city name"),
    address: yup.string().required("Please enter your address"),
    zipCode: yup.number().required("Please enter your zip code"),
  });
};
