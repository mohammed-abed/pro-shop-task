import * as yup from "yup";

export const LoginSchema = () => {
  yup.object({
    email: yup
      .string()
      .email("Please Enter a Valid Email ..")
      .required("Please Enter an Email .."),
    password: yup
      .string("Please Enter a valid Password ..")
      .min(6)
      .required("Please Enter a Password .."),
  });
};
