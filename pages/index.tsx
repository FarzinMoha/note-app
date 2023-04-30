import Button from "@/components/button/Button";
import DropDown from "@/components/drop-down/DropDown";
import Input from "@/components/input/Input";
import Note from "@/components/note/Note";
import { useRouter } from "next/router";
import { getTextList } from "./api";
import { textListResponse } from "@/type/type";
import { useState } from "react";

type homeProps = {
  textList : textListResponse[]
}

const Home = ({textList}:homeProps) => {
  const [changeStatus , setChangeStatus] = useState(true)
  const itemList = ["gym", "walking", "swim", "play", "football"];
  const router = useRouter()
  return (
    <main className="w-screen h-screen p-4 flex justify-center items-center ">
      <div className={`fixed w-screen ${!changeStatus && 'scale-0'} ${changeStatus && 'scale-1'} duration-100 h-screen bg-bgBlackTransparent2 flex justify-center items-center z-20`}>
        <div className={`w-[90vw]  max-w-[500px] h-[200px] ${!changeStatus && 'scale-0'} ${changeStatus && 'scale-1'} duration-500  bg-primary2 rounded-lg flex flex-col justify-evenly items-center p-4`}>
            <div className="w-full h-[50px] text-center">
              <p className="text-white text-xl">Are you sure ?</p>
            </div>
            <div className="w-full h-[150px] flex justify-between items-center px-5">
                <Button rootClass="mx-1">Yes</Button>
                <Button onClick={()=>setChangeStatus(false)} rootClass="mx-1 bg-primary2">No</Button>
            </div>
        </div>
      </div>
      <section className="w-full relative lg:w-[85%]  h-full sm:max-w-[1100px] max-h-[700px] bg-bgBlackTransparent  shadow-3xl   rounded-md px-3 py-3 overflow-scroll">
        <div className="w-full min-h-[600px] flex flex-col  justify-start items-center">
          <div className="w-full flex flex-col lg:flex-row justify-evenly items-start lg:items-center">
          <h1 className="font-extrabold text-secondry text-5xl mb-5">All notes</h1>
          <div className="w-full lg:w-fit flex justify-start items-center">

          <Input placeholder="search"/>
          <DropDown items={itemList} rootClass="mb-5 ml-4" />
          </div>
          </div>
          {textList.map(item=> <Note key={item.id} note={item} setChangeStatus={setChangeStatus}/> )}
        </div>
        <Button onClick={()=>router.push('/add-new-text')} rootClass="absolute lg:fixed absolute top-0 right-[15px] lg:top-[85%] w-[65px] h-[65px] sm:w-[65px] sm:h-[65px] rounded-full  flex justify-center items-center text-2xl">+</Button>
      </section>
    </main>
  );
};

export default Home;



export async function getServerSideProps(){
  const textList = await getTextList()
  return {
    props:{
      textList,
    }
  }
}
