import CreateAndEditText from '@/components/create-and-edit-text/CreateAndEditText'
import React, { useCallback, useState } from 'react'
import { addText } from '../api'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';


const AddNewText = () => {
  const [state , setState] = useState({ id: '', category: '', text: '', status: false })
  const router = useRouter()
  const submitHandler = useCallback(async (e:any)=>{
    e.preventDefault()
    try {
      await addText({...state , id:uuidv4()})
      console.log({...state , id:uuidv4()})
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  },[state])
  const onChangeHandler = useCallback((e:any)=>{
    const {name , value} = e.target
    setState({...state , [name]:value})
  },[state])
  const value = {state , setState , submitHandler , onChangeHandler}
  return (
    <main className='w-screen min-h-screen flex justify-center items-center px-3 py-5'>
        <CreateAndEditText values={value}/>
    </main>
  )
}

export default AddNewText