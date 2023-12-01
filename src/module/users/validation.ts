import * as Yup from "yup";

export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const addUserSchema = Yup.object().shape({
  id: Yup.string().required("Id is required."),
  firstname: Yup.string().required("First Name is required."),
  lastname: Yup.string().required("Last Name is required."),
  phone: Yup.string().required("Number is required."),
  email: Yup.string()
    .required("Email is required.")
    .matches(EMAIL_REGEX, "Invalid Email Address"),
});
