import pallet from "@/pallet/pallet";
import React, { useState } from "react";
import {MdModeEditOutline} from 'react-icons/md'
import {FaRegTrashAlt} from 'react-icons/fa'

const Note = () => {
    const [editHover , setEditHover] = useState(false)
    const [trashHover , setTrashHover] = useState(false)
    const [showText , setShowText] = useState(false)
  return (
    <div className={`w-full h-[80px] duration-200  ${showText && 'h-[335px]'}  relative rounded-md bg-primary2 my-10`}>
      <span className="absolute -top-6 left-3 text-white font-bold text-4xl z-10">
        hobits
      </span>
        <span className="absolute -bottom-[2px] right-[30px] text-white text-[13px] select-none tracking-wide z-10">
        Feb 28 2022
      </span>
      <div className="w-[calc(70% + 2rem)] h-full duration-200  flex justify-start items-center">
        <span className="w-[3rem] h-full flex justify-center items-center">
            <input className="w-[20px] h-[20px] cursor-pointer accent-secondry" type="checkbox"/>
        </span>
        <div onClick={()=>setShowText(!showText)} className={`w-[80%] relative flex justify-start items-start h-full overflow-scroll  cursor-pointer px-2 pr-10 ${showText && 'pb-[25px]'}`}>
      <p className={`w-full leading-7 pt-[26px] tracking-wide ${!showText && 'text-ellipsis overflow-hidden whitespace-nowrap ' }`}>Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="w-[calc(20%-2rem)] relative h-full  flex justify-center items-center">
            <span onMouseEnter={()=>setEditHover(true)} onMouseLeave={()=>setEditHover(false)} className="w-[45px] h-[45px] rounded-full cursor-pointer bg-secondry flex justify-center items-center mx-2 hover:border-2 hover:border-secondry hover:bg-primary duration-200">
                <MdModeEditOutline color={!editHover ? pallet.primary : pallet.secondry}/>
            </span>
            <span onMouseEnter={()=>setTrashHover(true)} onMouseLeave={()=>setTrashHover(false)} className="w-[45px] h-[45px] rounded-full cursor-pointer bg-secondry flex justify-center items-center mx-2 hover:border-2 hover:border-secondry hover:bg-primary duration-200">
                <FaRegTrashAlt color={!trashHover ? pallet.primary : pallet.secondry}/>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Note;
