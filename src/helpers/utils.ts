import Cookies from "js-cookie";

import { TOKEN } from "./constant";

const getItemFromCookie = (key: string) => Cookies.get(key);

const setItemInCookie = (key: string, value: string) => Cookies.set(key, value);

export const removeItemInCookie = (key: string) => Cookies.remove(key);

export { getItemFromCookie, setItemInCookie };

export const getToken = () => {
  return Cookies.get(TOKEN);
};

export const setToken = (token: string) => {
  return Cookies.set(TOKEN, token);
};

export const removeToken = () => {
  return Cookies.remove(TOKEN);
};
