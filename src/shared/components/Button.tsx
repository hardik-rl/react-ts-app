import { clsx } from "clsx";
import { TitleProps } from "../type/type";

const Button = ({ title, onClick, type, variant }: TitleProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(`btn btn-${variant}`)}
    >
      {title}
    </button>
  );
};

export default Button;
