import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import FormControl from "../../../shared/components/FormControl";
import FormLabel from "../../../shared/components/FormLabel";
import { addUser, updateUser } from "../api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { addUserSchema } from "../validation";
import Button from "../../../shared/components/Button";
import { AddUserFormProps, CommonModalProps } from "../types";

const CommonModal = ({ isOpen, onClose, selectedUser }: CommonModalProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(selectedUser ? updateUser : addUser, {
    onSuccess: () => {
      const actionMessage = selectedUser ? "updated" : "added";
      toast.success(`User ${actionMessage}  successfully`);
      queryClient.invalidateQueries(
        "get-user" as InvalidateQueryFilters<"get-user">
      );
      onClose();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.message, {
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

  const handleSubmit = (values: AddUserFormProps) => {
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
                  <ErrorMessage
                    name="id"
                    component="div"
                    className="text-red-600 text-sm"
                  />
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
                    className="text-red-600 text-sm"
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
                    className="text-red-600 text-sm"
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
                    className="text-red-600 text-sm"
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
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3">
                <Button
                  variant="primary"
                  type="submit"
                  title="Save"
                  onClick={() => {}}
                />
                <Button
                  variant="secondary"
                  type="button"
                  title="Cancel"
                  onClick={onClose}
                />
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default CommonModal;
