import { useFormik } from "formik";
import { AddUserFormProps } from "../../users/types";
import useAddUser from "./useAddUser";

export const useAddUserForm = (data: any) => {
  const { mutate: createUserFn } = useAddUser();

  return useFormik<AddUserFormProps>({
    initialValues: {
      id: data?.id,
      firstname: data?.firstname,
      lastname: data?.lastname,
      email: data?.email,
      phone: data?.phone,
    },
    // validationSchema: "addUserSchema",
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: () => createUserFn(data),
  });
};
