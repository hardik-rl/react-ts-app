import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import FormControl from "../../../shared/components/FormControl";
import FormLabel from "../../../shared/components/FormLabel";
import { addUser, updateUser } from "../Api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { addUserSchema } from "../validation";

const CommonModal = ({ isOpen, onClose, selectedUser }: any) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(selectedUser ? updateUser : addUser, {
    onSuccess: () => {
      const actionMessage = selectedUser ? "updated" : "added";
      toast.success(`User ${actionMessage} successfully`);
      queryClient.invalidateQueries(
        "get-user" as InvalidateQueryFilters<"get-user">
      );
      onClose();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error?.response?.data.message, {
        type: "error",
      });
    },
  });

  const initialValues = selectedUser || {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  };


  const handleSubmit = (values:any) => {
    mutation.mutate(values);
  };

  return (
    <div>
      {isOpen && (
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={addUserSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FormLabel label="Id" />
                  <Field
                    type="text"
                    name="id"
                    placeholder="Enter Your Id"
                    as={FormControl}
                  />
                  <ErrorMessage name="id" component="div" className="text-red-600" />
                </div>
                <div>
                  <FormLabel label="Name" />
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="Enter Your First Name"
                    as={FormControl}
                    
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <FormLabel label="Last Name" />
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Enter Last Name"
                    as={FormControl}
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <FormLabel label="Email" />
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter Your Email Id"
                    as={FormControl}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div>
                  <FormLabel label="Phone" />
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    as={FormControl}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default CommonModal;
