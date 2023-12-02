
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
  onClick: () => void;
}
