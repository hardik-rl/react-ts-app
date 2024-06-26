import { ACCESS_TOKEN } from "../../../helpers/constant";
import { setToken } from "../../../helpers/utils";
import api from "../../../shared/api";
import { LoginFormProps } from "../type/types";

export const signin = (data: LoginFormProps) =>

  api.post("/login", data).then(() => {
    setToken(ACCESS_TOKEN);
  });
