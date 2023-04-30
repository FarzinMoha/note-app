import { dropDownProps } from '@/type/type'
import React, { SelectHTMLAttributes } from 'react'

const DropDown:React.FC<SelectHTMLAttributes<HTMLSelectElement> & dropDownProps> = ({items}) => {
  return (
    <select className='min-w-[150px] outline-none mx-2 cursor-pointer h-[40px] pl-2 bg-secondry rounded-md'>
        {items.map(item=> <option className='cursor-pointer'>{item}</option>)}
    </select>
  )
}

export default DropDown