export interface FormLabelProps {
  label: string;
}
export interface ModalProps {
  open: boolean;
  onCloseModal: ()=> void;
  setOpen: (boolean: boolean) => void;
};

export interface TitleProps {
  title: string;
  onClick: () => void;
}
