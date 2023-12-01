import React from "react";
import { FormLabelProps } from "../type/type";

const FormLabel = ({ label }: FormLabelProps) => {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
      {label}
    </label>
  );
};

export default FormLabel;
