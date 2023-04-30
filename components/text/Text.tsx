import { inputProps } from "@/type/type";
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const Text: React.FC<
  TextareaHTMLAttributes<HTMLTextAreaElement> & inputProps
> = ({ label,error,rootClass, ...props }) => {
  return (
    <div className={`w-full sm:w-[500px] h-[300px] mb-4 flex flex-col justify-center items-start ${rootClass}`}>
        <span className='pl-2 text-secondry h-[30px] text-lg'>{label}</span>
      <textarea className='w-full rounded-md h-[240px] p-2 text-primary focus:border-none focus:outline-secondry focus:outline-2' {...props}/>
      <span className='pl-2 text-red-500 h-[30px] font-light text-sm tracking-wide'>{error}</span>
    </div>
  );
};

export default Text;
