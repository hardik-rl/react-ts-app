import { useFormik } from "formik";
import { loginSchema } from "../login/validation";
import { LoginFormProps } from "../type/types";

export const useLoginForm = (action: CallableFunction) => {
  return useFormik<LoginFormProps>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: () => action()
  });
};
