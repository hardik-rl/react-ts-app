import React from "react";
import Table from "../../../shared/components/Table";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const Products = () => {
  const tableHeaders = ["Product name", "Color", "Category", "Price", "Action"];

  const tableBody = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999",
    },
  ];
  return (
    <Table
      tableHeaders={tableHeaders}
      tableBody={tableBody}
      isAction={(item: any) => (
        <>
          <button onClick={() => console.log(item)}>
            <PencilSquareIcon className="w-5 h-5" />
          </button>
        </>
      )}
    />
  );
};

export default Products;
