import pallet from "@/pallet/pallet";
import React, { SetStateAction, useCallback, useState } from "react";
import {MdModeEditOutline} from 'react-icons/md'
import {FaRegTrashAlt} from 'react-icons/fa'
import Link from "next/link";
import { textListResponse } from "@/type/type";

type notProps = {
  note:textListResponse
  setChangeStatus:React.Dispatch<SetStateAction<boolean>>
}

const Note = ({note , setChangeStatus}:notProps) => {
  const {category,text,status} = note
    const [editHover , setEditHover] = useState(false)
    const [trashHover , setTrashHover] = useState(false)
    const [showText , setShowText] = useState(false)
    const statusHandler = useCallback(()=>{
      setChangeStatus(true)
    },[])




  return (
    <div className={`w-full h-[85px] duration-200  ${showText && 'h-[336px]'}  relative rounded-md bg-primary hover:bg-primary2 text-white my-7`}>
      <span className="absolute -top-6 left-3 text-white font-bold text-4xl z-10">
        {category}
      </span>
        <span className="absolute -bottom-[0px] right-[5px] text-white text-[11px] select-none tracking-wide z-10">
        Feb 28 2022
      </span>
      <div className="w-[calc(70% + 2rem)] h-full duration-200  flex justify-start items-center">
        <span className="w-[3rem] h-full flex justify-center items-center">
            <input className="w-[20px] h-[20px] cursor-pointer accent-secondry" type="checkbox" checked={status} onChange={statusHandler}/>
        </span>
        <div onClick={()=>setShowText(!showText)} className={`w-[80%] relative flex justify-start items-start h-full overflow-scroll  cursor-pointer px-2 pr-10 ${showText && 'pb-[25px]'}`}>
      <p className={`w-full leading-7 pt-[26px] tracking-wide ${!showText && 'text-ellipsis overflow-hidden whitespace-nowrap ' }`}>{text}</p>
        </div>
        <div className="w-[calc(20%-2rem)] min-w-[120px] relative h-full  flex justify-center items-center">
            <Link href='/edit-text' onMouseEnter={()=>setEditHover(true)} onMouseLeave={()=>setEditHover(false)} className="w-[45px] h-[45px] rounded-full cursor-pointer bg-secondry flex justify-center items-center mx-2 hover:border-2 hover:border-secondry hover:bg-primary duration-200">
                <MdModeEditOutline color={!editHover ? pallet.primary : pallet.secondry}/>
            </Link>
            <button onMouseEnter={()=>setTrashHover(true)} onMouseLeave={()=>setTrashHover(false)} className="w-[45px] h-[45px] rounded-full cursor-pointer bg-secondry flex justify-center items-center mx-2 hover:border-2 hover:border-secondry hover:bg-primary duration-200">
                <FaRegTrashAlt color={!trashHover ? pallet.primary : pallet.secondry}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
