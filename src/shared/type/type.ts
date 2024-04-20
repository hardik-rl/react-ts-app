
export interface FormLabelProps {
  label: string;
}

export interface ModalProps {
  open: boolean;
  children: JSX.Element;
  setOpen: (boolean: boolean) => void;
};

export interface TitleProps {
  title: string;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  type: "button" | "reset" | "submit" | undefined;
  onClick: () => void;
}

export interface ConfirmationModalProps {
  closeModal: any;
  selectedUser: any;
}

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}