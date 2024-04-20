import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { addUser } from "../api";
import { toast } from "react-toastify";
import { AddUserFormProps, AddUserProp } from "../types";

const useAddUser = ({ onCloseModal, refetch }: AddUserProp) => {
  return useMutation((data: AddUserFormProps) => addUser(data), {
    onSuccess: () => {
      toast.success("User Added Successfully");
      refetch();
      onCloseModal();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error?.message);
    },
  });
};

export default useAddUser;
