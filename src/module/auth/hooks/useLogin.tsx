import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { signin } from "../login/api";
import { LoginFormProps } from "../type/types";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation((data: LoginFormProps) => signin(data), {
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message, {
        type: "error",
      });
    },
  });
};
