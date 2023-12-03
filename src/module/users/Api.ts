import api from "../../shared/api";
import { AddUserFormProps } from "./types";

export const getAllUsers = () => api.get("/users");

export const addUser = (data: AddUserFormProps) => api.post(`/users`, data);

export const updateUser = (data: any) => api.put(`/users/${data.id}`, data);
