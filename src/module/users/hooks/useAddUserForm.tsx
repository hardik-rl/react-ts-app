import { useFormik } from "formik";
import { AddUserFormProps } from "../../users/types";
import { addUserSchema } from "../validation";

export const useAddUserForm = (action: CallableFunction) => {
  return useFormik<AddUserFormProps>({
    initialValues: {
      id: "" || "",
      firstname: "" || "",
      lastname: "" || "",
      email: "" || "",
      phone: "" || "",
     
    },
    validationSchema: addUserSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: () => action(),
  });
};
