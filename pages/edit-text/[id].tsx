import CreateAndEditText from "@/components/create-and-edit-text/CreateAndEditText";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { editText, getText } from "../api";
import { textListResponse } from "@/type/type";

type editProps = {
  text:textListResponse
}

const EditText = ({text}:editProps) => {
  const router = useRouter()
  const {id} = router.query
  const [state , setState] = useState(text)
  
  const submitHandler = useCallback(async (e:any)=>{
    e.preventDefault()
    try {
      await editText(id,{...state})
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  },[state])

  const onChangeHandler = useCallback((e:any)=>{
    const {name , value} = e.target
    setState({...state , [name]:value})
  },[state])

  const values = {state , setState , submitHandler , onChangeHandler}
  return (
    <main className="w-screen min-h-screen flex justify-center items-center px-3 py-5">
      <CreateAndEditText values={values} />
    </main>
  );
};

export default EditText;



export async function getServerSideProps(context:any) {
  const { id } = context.query;
  const text = await getText(id)
  return{
    props:{
      text,
    }
  }
}
