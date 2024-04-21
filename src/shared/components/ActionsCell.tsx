import React from "react";

const ActionsCell = ({ children }: any) => {
  return (
    <td
      // colSpan={5}
      className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0"
    >
      {children}
    </td>
  );
};

export default ActionsCell;
