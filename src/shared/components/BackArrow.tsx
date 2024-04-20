import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ButtonProps } from "../type/type";

const BackArrow = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="ml-8 flex items-center gap-1 text-sm"
    >
      <ArrowLeftIcon className="h-6 w-6 text-indigo-600" />
      <span className="text-indigo-600 font-semibold">Back</span>
    </button>
  );
};

export default BackArrow;
