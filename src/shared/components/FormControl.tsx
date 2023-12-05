import React from "react";

const FormControl = ({
  placeholder,
  name,
  value,
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <input
        type="text"
        name={name}
        value={value}
        autoComplete="off"
        onChange={onChange}
        className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormControl;
