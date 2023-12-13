import { useState } from "react";

const SelectMenu = () => {
  const menuOptions = [
    {
      label: "None",
      options: [],
    },
    {
      label: "Woodan",
      options: ["Woodan 1", "Woodan 2"],
    },
    {
      label: "Plastic",
      options: ["Plastic 1", "Plastic 2"],
    },
    {
      label: "Metal",
      options: ["Metal 1", "Metal 2"],
    },
  ];
  const [menu, setMenu] = useState(menuOptions[0].label);

  const handleSelectChange = (event: any) => {
    setMenu(event.target.value);
  };

  return (
    <div className="px-10 my-6">
      <select
        onChange={handleSelectChange}
        className="block mb-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        value={menu}
      >
        {menuOptions.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>

      {menu !== "None" && (
        <select className="block mb-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          {menuOptions
            .find((option) => option.label === menu)
            ?.options.map((subOption) => (
              <option key={subOption} value={subOption}>
                {subOption}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default SelectMenu;
