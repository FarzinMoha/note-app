import { dropDownProps } from "@/type/type";
import React, { SelectHTMLAttributes } from "react";

const DropDown: React.FC<
  SelectHTMLAttributes<HTMLSelectElement> & dropDownProps
> = ({ items, rootClass, ...props }) => {
  return (
    <div className={`min-w-[100px] relative cursor-pointer h-[40px] mb-3 ${rootClass}`}>
      <span className="absolute -top-7 left-0 pl-2 text-secondry h-[30px] text-lg">Category</span>
      <select
        className="w-full h-full outline-none  pl-2 bg-secondry rounded-md"
        {...props}
      >
        {items.map((item, indx) => (
          <option key={indx} value={item} className="cursor-pointer">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
