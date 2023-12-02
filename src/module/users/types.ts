export interface AddUserFormProps {
  id: number | string;
  email: string;
  firstname: string;
  lastname: string;
  phone: number | string;
}
export interface AddUserProp {
  onCloseModal: () => void;
}

export interface AddUsersModalProps {
  onCloseModal: () => void;
  setOpen: (boolean: boolean) => void;
}