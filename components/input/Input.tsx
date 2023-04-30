import { inputProps } from '@/type/type'
import React, { InputHTMLAttributes } from 'react'

const Input:React.FC<InputHTMLAttributes<HTMLInputElement> & inputProps> = ({rootClass , label , error , ...props}) => {
  return (
    <div className={`w-full sm:w-[500px] h-[100px] mb-4 flex flex-col justify-center items-start ${rootClass}`}>
      <span className='pl-2 text-secondry h-[30px] text-lg'>{label}</span>
      <input className='w-full rounded-md h-[40px] p-2 text-primary focus:border-none focus:outline-secondry focus:outline-2' {...props}/>
      <span className='pl-2 text-red-500 h-[30px] font-light text-sm tracking-wide'>{error}</span>
    </div>
  )
}

export default Input