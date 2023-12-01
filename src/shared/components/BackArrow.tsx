// import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const BackArrow = () => {
  return (
    <button className="ml-8 mt-6 flex items-center gap-1 text-sm">
      {/* <ArrowLeftIcon className="h-6 w-6 text-indigo-600" /> */}
      <span className="text-indigo-600 font-semibold">Back</span>
    </button>
  );
};

export default BackArrow;
