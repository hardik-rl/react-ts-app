import { RefetchOptions } from "@tanstack/react-query";

export interface AddUserFormProps {
  id: number | string;
  email: string;
  firstname: string;
  lastname: string;
  phone: number | string;
}
export interface AddUserProp {
  onCloseModal: () => void;
  refetch: (options?: RefetchOptions) => Promise<any>;
}

export interface AddUsersModalProps {
  onCloseModal: () => void;
  refetch: (options?: RefetchOptions) => Promise<any>;
  setOpen: (boolean: boolean) => void;
  onSuccess: () => void;
}
