import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { addUser } from "../Api";
import { toast } from "react-toastify";
import { AddUserFormProps, AddUserProp } from "../types";

const useAddUser = ({ onCloseModal }: AddUserProp) => {
  return useMutation((data: AddUserFormProps) => addUser(data), {
    onSuccess: (data:any) => {
      toast.success(data?.statusText);
      onCloseModal();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error?.message);
    },
  });
};

export default useAddUser;
