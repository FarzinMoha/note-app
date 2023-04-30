import React, { useCallback, useEffect, useState } from 'react'
import DropDown from '../drop-down/DropDown'
import Input from '../input/Input'
import Text from '../text/Text'
import Button from '../button/Button'
import { useRouter } from 'next/router'
import { CreateAndEditText } from '@/type/type'
import { getTextList } from '@/pages/api'

type createAndEditProps = {
  values:CreateAndEditText
}

const CreateAndEditText = ({values}:createAndEditProps) => {
  const {state , setState , submitHandler , onChangeHandler} = values
    const [categories , setCategories] = useState<any>(null)
    const [category , setCategory] = useState('new category')
    const router = useRouter()


    const drompDownChangeHandler = useCallback((e:any) => {
      setState({...state , category:e.target.value})
      setCategory(e.target.value)
    },[state])

    useEffect(()=>{
      const fetchCategory = async () => {
        const response = await getTextList()
        const category = response.map(item=>item.category)
        category.unshift('new category')
        const categories = Array.from(new Set(category).values())
        setCategories(categories) 
      }

      if(state.category.length > 0){
        setCategory(state.category)
      }
      fetchCategory()
    },[])

  return (
    <form onSubmit={submitHandler} className='w-full h-full sm:max-w-[900px] min-h-[600px] bg-bgBlackTransparent rounded-md px-3 py-3'>
      <div className='w-full sm:w-[80%] sm:max-w-[800px] mx-auto h-[150px]  px-2 flex justify-center items-center'>
        {category=== 'new category' && <Input error={!state.category.length? 'This field is required!' : ''} value={state.category} name='category' label='New Catgory' onChange={onChangeHandler}/>}
        <DropDown rootClass={category !== 'new category' ? 'w-full' : 'ml-2'} selected={category} items={categories} onChange={drompDownChangeHandler}/>
      </div>
      <div className='w-full flex flex-col px-2 justify-evenly items-center'>
        <Text error={!state.text.length? 'This field is required!' : ''} name='text' value={state.text} label='Text' rootClass='w-full sm:w-[80%] sm:max-w-[800px]' onChange={onChangeHandler}/>
        <Button disabled={!state.category.length || !state.text.length} type='submit'>Save</Button>
        <Button onClick={()=>router.replace('/')} rootClass=' text-secondry' bgSecondColor>Cancel</Button>
      </div>
    </form>
  )
}

export default CreateAndEditText