import pallet from "@/pallet/pallet";
import React, { SetStateAction, useState } from "react";
import {MdModeEditOutline} from 'react-icons/md'
import {FaRegTrashAlt} from 'react-icons/fa'
import Link from "next/link";
import { textListResponse } from "@/type/type";
import { formatDate } from "@/utils/getData";


type notProps = {
  note:textListResponse
  setChangeStatus:React.Dispatch<SetStateAction<boolean>>
  setDeletText:React.Dispatch<SetStateAction<boolean>>
  setState:any
}

const Note = ({note , setChangeStatus,setState,setDeletText}:notProps) => {
  const {category,text,status,id,date} = note
  const formattedDate = formatDate(date);
  const [editHover , setEditHover] = useState(false)
  const [trashHover , setTrashHover] = useState(false)
  const [showText , setShowText] = useState(false)

  return (
    <div className={`w-full h-[85px] duration-200  ${showText && 'h-[255px]'}  relative rounded-md bg-primary hover:bg-primary2 text-white my-7`}>
      <span className="absolute -top-6 left-3 text-white font-bold text-xl md:text-4xl  z-10">
        {category}
      </span>
        <span className="absolute -bottom-[0px] right-[5px] text-white text-[11px] select-none tracking-wide z-10">
        {formattedDate}
      </span>
      <div className="w-[calc(70% + 2rem)] h-full duration-200  flex justify-start items-center">
        <div className="w-[3rem] h-full flex justify-center items-center">
            <input className="w-[20px] h-[20px] cursor-pointer accent-secondry" type="checkbox" checked={status} onChange={()=>{setChangeStatus(true);setState(note)}}/>
        </div>
        <div onClick={()=>setShowText(!showText)} className={`w-[80%] relative flex justify-start items-start h-full overflow-scroll  cursor-pointer px-2 pr-10 ${showText && 'pb-[25px]'}`}>
      <p className={`w-full leading-7 pt-[26px] text-sm md:text-base tracking-wide ${!showText && 'text-ellipsis overflow-hidden whitespace-nowrap ' }`}>{text}</p>
        </div>
        <div className="w-[calc(20%-2rem)] min-w-[120px] relative h-full  flex justify-center items-center">
            <Link href={`/edit-text/${id}`} onMouseEnter={()=>setEditHover(true)} onMouseLeave={()=>setEditHover(false)} className="w-[45px] h-[45px] rounded-full cursor-pointer bg-secondry flex justify-center items-center mx-2 hover:border-2 hover:border-secondry hover:bg-primary duration-200">
                <MdModeEditOutline color={!editHover ? pallet.primary : pallet.secondry}/>
            </Link>
            <button onClick={()=>{setDeletText(true);setState(note)}} onMouseEnter={()=>setTrashHover(true)} onMouseLeave={()=>setTrashHover(false)} className="w-[45px] h-[45px] rounded-full cursor-pointer bg-secondry flex justify-center items-center mx-2 hover:border-2 hover:border-secondry hover:bg-primary duration-200">
                <FaRegTrashAlt color={!trashHover ? pallet.primary : pallet.secondry}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
