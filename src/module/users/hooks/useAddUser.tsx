import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { addUser } from "../Api";
import { AddUserFormProps } from "../types";

const useAddUser = () => {
  return useMutation((data: AddUserFormProps) => addUser(data), {
    onSuccess: () => {
      console.log("sucee");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log("errr");
    },
  });
};

export default useAddUser;
