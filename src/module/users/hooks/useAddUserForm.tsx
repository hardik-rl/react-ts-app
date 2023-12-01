import { useFormik } from "formik";
import { AddUserFormProps } from "../../users/types";
import { addUserSchema } from "../validation";

export const useAddUserForm = (data: AddUserFormProps, action:()=> void) => {
  return useFormik<AddUserFormProps>({
    initialValues: {
      id: data?.id ||'',
      firstname: data?.firstname ||'',
      lastname: data?.lastname ||'',
      email: data?.email ||'',
      phone: data?.phone ||'',
    },
    validationSchema: addUserSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: () => action(),
  });
};
