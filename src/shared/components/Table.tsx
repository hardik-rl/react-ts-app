import { useNavigate } from "react-router-dom";
import React from "react";
import BackArrow from "./BackArrow";
import ActionsCell from "./ActionsCell";

type TableProps = {
  tableHeaders: string[];
  tableBody: object[];
  isAction?: any;
  onEdit?: any;
  deleteModalOnClick?: any;
};

const Table = ({
  tableHeaders,
  tableBody,
  onEdit,
  deleteModalOnClick,
  isAction,
}: TableProps) => {
  const history = useNavigate();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-4 sm:px-6 lg:p-8">
      <BackArrow onClick={() => history("/")} />
      <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((item, index) => (
            <tr
              key={index}
              className={`bg-${index % 2 === 0 ? "white" : "gray-50"} dark:bg-${
                index % 2 === 0 ? "gray-900" : "gray-800"
              } border-b dark:border-gray-700`}
            >
              {Object.values(item).map((value, index) => (
                <td key={index} className="px-6 py-4">
                  {value}
                </td>
              ))}
              <ActionsCell>{isAction && isAction(item)}</ActionsCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
