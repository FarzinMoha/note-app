import { inputProps } from '@/type/type'
import React, { InputHTMLAttributes } from 'react'

const Input:React.FC<InputHTMLAttributes<HTMLInputElement> & inputProps> = ({rootClass , label , error , ...props}) => {
  return (
    <div className={`w-full sm:w-[300px] h-[100px] mb-4 flex flex-col justify-center items-start ${rootClass}`}>
      <span className='pl-2 text-secondry h-[30px] text-lg'>{label}</span>
      <input className='w-full rounded-xl h-[40px] p-2 text-primary' {...props}/>
      <span className='pl-2 text-red-500 h-[30px] font-light text-sm tracking-wide'>{error}</span>
    </div>
  )
}

export default Input